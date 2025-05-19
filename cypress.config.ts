/*this is for js
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});*/

// This is for ts
/*import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com'
  },
});*/

// To add allure. 
// Allure was installed using npm install --save-dev @shelex/cypress-allure-plugin allure-commandline
import { defineConfig } from "cypress";
//import allureWriter from "@shelex/cypress-allure-plugin/writer";
//import "@shelex/cypress-allure-plugin";
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //allureWriter(on, config);
      allureWriter(on, config);
      return config;
    },
    baseUrl: 'https://www.saucedemo.com',
    "retries": {
      "runMode": 3,
      "openMode": 3
    }
  }
});

