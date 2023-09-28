import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../fixtures/selectors/loginPage.json";

const username = Cypress.env("username");
const password = Cypress.env("password");

Given("A user opens login page", () => {
  cy.visit(Cypress.env("loginPage"));
});

When("A user enter the username into input", () => {
  cy.get(loginPage.usernameInput).type(username);
});

When("A user enter the password into input", () => {
  cy.get(loginPage.passwordInput).type(password);
});

When("A user clicks on the login button", () => {
  cy.get(loginPage.loginButton).click();
});

Then("A user will be logged in to account", () => {
  cy.url().should("contain", Cypress.env("accountPage"));
});
