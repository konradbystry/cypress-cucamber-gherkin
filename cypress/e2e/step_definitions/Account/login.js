import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../../fixtures/selectors/loginPage.json";
import alerts from "../../../fixtures/selectors/alerts.json";
import routes from "../../../fixtures/routes.json";

const { username, password } = Cypress.env("user");

Given("A user opens login page", () => {
  cy.visit(routes.loginPage).url().should("contain", routes.loginPage);
});

When("A user enter correct username into input", () => {
  cy.get(loginPage.usernameInput).type(username);
});

When(
  "A user enter incorrect username {string} into input",
  (incorrectUsername) => {
    cy.get(loginPage.usernameInput).type(incorrectUsername);
  }
);

When("A user enter correct password into input", () => {
  cy.get(loginPage.passwordInput).type(password);
});

When(
  "A user enter incorrect password {string} into input",
  (incorrectPassword) => {
    cy.get(loginPage.passwordInput).type(incorrectPassword);
  }
);

When("A user clicks on the login button", () => {
  cy.get(loginPage.loginButton).click();
});

Then("A user will be logged in to account", () => {
  cy.url().should("contain", routes.accountPage);
});

Then("The error message {string} is displayed", (errorMessage) => {
  cy.get(alerts.error)
    .should("be.visible")
    .invoke("text")
    .should("contain", errorMessage);
});
