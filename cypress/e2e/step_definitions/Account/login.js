import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../fixtures/selectors/loginPage.json";
import alerts from "../../../fixtures/selectors/alerts.json";

const username = Cypress.env("username");
const password = Cypress.env("password");
const incorrectUsername = "incorrect_username";
const incorrectPassword = "incorrect_password";

Given("A user opens login page", () => {
  cy.visit(Cypress.env("loginPage"));
});

When("A user enter correct username into input", () => {
  cy.get(loginPage.usernameInput).type(username);
});

When("A user enter incorrect username into input", () => {
  cy.get(loginPage.usernameInput).type(incorrectUsername);
});

When("A user enter correct password into input", () => {
  cy.get(loginPage.passwordInput).type(password);
});

When("A user enter incorrect password into input", () => {
  cy.get(loginPage.passwordInput).type(incorrectPassword);
});

When("A user clicks on the login button", () => {
  cy.get(loginPage.loginButton).click();
});

Then("A user will be logged in to account", () => {
  cy.url().should("contain", Cypress.env("accountPage"));
});

Then("The error message {string} is displayed", (errorMessage) => {
  cy.get(alerts.error)
    .should("be.visible")
    .invoke("text")
    .should("contain", errorMessage);
});
