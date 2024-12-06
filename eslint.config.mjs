import cypress from "eslint-plugin-cypress";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  // Common configuration for JavaScript and TypeScript
  ...compat.extends("eslint:recommended", "plugin:cypress/recommended"),
  {
    files: ["**/*.js", "**/*.ts"], // Target JavaScript and TypeScript files
    plugins: {
      cypress,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...cypress.environments.globals.globals,
      },
    },
    rules: {
      "no-unused-vars": "warn", // Example rule
    },
  },
  // Configuration for .feature files
  {
    files: ["**/*.feature"], // Target .feature files
    plugins: {}, // No specific plugins for Gherkin linting
    rules: {
      // Add formatting rules if applicable
      "max-len": ["warn", { code: 120 }], // Example rule for line length
    },
  },
];
