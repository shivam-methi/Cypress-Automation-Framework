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
        globalThis: "readonly", // Declare 'globalThis' as a global
        user: "readonly",  // Declare 'user' as a global
        data: "readonly",  // Declare 'data' as a global
      },
    },
    rules: {
      "no-unused-vars": "warn", // Example rule
      "cypress/unsafe-to-chain-command": "off", // Disable this specific rule globally
      "indent": ["error", 4],  // Enforce 2-space indentation (change to 4 if preferred)
    },
  },
];
