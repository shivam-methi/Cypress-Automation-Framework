const dotenv = require('dotenv');
const { defineConfig } = require("cypress");
const { writeFileSync } = require("fs");
const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;
const XLSX = require('xlsx');

// Load environment variables from .env file
dotenv.config();

module.exports = defineConfig({
  projectId: '5guftj',
  e2e: {
    setupNodeEvents(on, config) {

      // First Configuration
      (() => {

        // Add XLSX to JSON task
        on('task', {
          convertXlsxToJson(filePath) {
            const workbook = XLSX.readFile(filePath);
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            const fileName = path.basename(filePath, '.xlsx');
            const jsonFilePath = `./cypress/fixtures/${fileName}.json`;
            writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));
            return jsonFilePath;
          }
        });

        // Add cucumber preprocessor
        on('file:preprocessor', cucumber());

        //this configurations is useful when you have to utilize dotenv/.env file 

        // checks if the ENV variable is set in config.env(CLI) first
        // If not, second it looks in process.env(.env file)
        // If not, third it will set 'DEFAULT' env 
        const env = config.env.ENV || process.env.ENV || 'DEFAULT';
        const envConfig = {
          QA: process.env.QA_BASE_URL,
          STAGING: process.env.STAGING_BASE_URL,
          PROD: process.env.PROD_BASE_URL,
          DEFAULT: process.env.BASE_URL,
        };

        if (!envConfig[env]) {
          throw new Error(`Invalid environment: ${env}. Must be one of QA, STAGING, PROD, or DEFAULT.`);
        }

        // Dynamically set the baseUrl
        config.baseUrl = envConfig[env];

        // Pass all environment variables into Cypress.env for logging
        config.env.QA_BASE_URL = process.env.QA_BASE_URL;
        config.env.STAGING_BASE_URL = process.env.STAGING_BASE_URL;
        config.env.PROD_BASE_URL = process.env.PROD_BASE_URL;
        config.env.BASE_URL = process.env.BASE_URL;

        console.log(`Running tests with baseUrl: ${config.baseUrl}`);
      })();

      /*
            // Second Configuration - this configurations is useful when you have to 
            // utilize config files - qa/staging/prod.json 
            (() => {
      
      
              const environment = config.env.environment || 'qa'; // Default to QA
              const filePath = path.resolve('cypress/config', `${environment}.json`);
      
              if (!fs.existsSync(filePath)) {
                throw new Error(`Environment file not found: ${filePath}`);
              }
      
              const envConfig = require(filePath);
              config.env = { ...config.env, ...envConfig };
            })();
      
      */
      return config;

    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/other/*.js",
    // baseUrl: "https://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    // experimentalSessionAndOrigin: true,
    // modifyObstructiveCode: false,
    // experimentalStudio: true,
    // "scrollBehaviour": false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    // viewportHeight: 1080,
    // viewportWidth: 1920,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    retries: {
      runMode: 0,
      openMode: 0
    },
    env: {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@gmail.com",
    },
  },
});
