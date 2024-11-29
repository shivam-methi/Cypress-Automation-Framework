const { defineConfig } = require("cypress");
const { writeFileSync } = require("fs");
const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;
const XLSX = require('xlsx');

// function getConfigurationByFile(file) {
//   const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)

//   if (!fs.existsSync(pathToConfigFile)) {
//     console.log("No custom config file found.");
//     return {};
//   }

//   return fs.readJson(pathToConfigFile);
// }

module.exports = defineConfig({
  projectId: '5guftj',
  e2e: {
    setupNodeEvents(on, config) {
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
      })
      on('file:preprocessor', cucumber())
      // implement node event listeners here
     
      const environment = config.env.environment || 'qa'; // Default to QA
      const filePath = path.resolve('cypress/config', `${environment}.json`);

      if (!fs.existsSync(filePath)) {
        throw new Error(`Environment file not found: ${filePath}`);
      }

      const envConfig = require(filePath);
      return { ...config, env: { ...config.env, ...envConfig } };
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/other/*.js",
    baseUrl: "https://www.webdriveruniversity.com",
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
      email: "john.doe@gmail.com"
    }
  },
});
