require("dotenv").config();
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.WEBSITE_URL,
    specPattern: "**/*.feature",
    setupNodeEvents,
  },
  env: {
    username: process.env.USER_NAME,
    password: process.env.PASSWORD,
    loginPage: process.env.LOGIN_PAGE,
    accountPage: process.env.ACCOUNT_PAGE,
  },
});
