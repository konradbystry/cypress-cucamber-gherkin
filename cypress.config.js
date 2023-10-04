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
    user: {
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
    },
    loginPage: process.env.LOGIN_PAGE,
    accountPage: process.env.ACCOUNT_PAGE,
    editAccountDetailsPage: process.env.EDIT_ACCOUNT_DETAILS_PAGE,
    changePasswordPage: process.env.CHANGE_PASSWORD_PAGE,
    addressBookPage: process.env.ADDRESS_BOOK_PAGE,
    wishlistPage: process.env.WISHLIST_PAGE,
    orderHistoryPage: process.env.ORDER_HISTORY_PAGE,
    transactionHistoryPage: process.env.TRANSACTION_HISTORY_PAGE,
    downloadsPage: process.env.DOWNLOADS_PAGE,
    notificationsPage: process.env.NOTIFICATIONS_PAGE,
    logoffPage: process.env.LOGOFF_PAGE,
  },
});
