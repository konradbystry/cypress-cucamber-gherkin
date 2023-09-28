import loginPage from "../fixtures/selectors/loginPage.json";

Cypress.Commands.add("login", (username, password) => {
  cy.visit(Cypress.env("loginPage"));
  cy.get(loginPage.usernameInput)
    .type(username)
    .get(loginPage.passwordInput)
    .type(password)
    .get(loginPage.loginButton)
    .click();
});
