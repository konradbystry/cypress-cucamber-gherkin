import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import accountPage from "../../../fixtures/selectors/accountPage.json";

Given("Logged user is on account page", () => {
  cy.loginUser(Cypress.env("user")).visit(Cypress.env("accountPage"));
});

When("A user cliks on Edit Account Details tile", () => {
  cy.get(accountPage.tiles.container).within(() => {
    cy.get(accountPage.tiles.editAccountDetails).click();
  });
});

Then("The Edit Account Details page is opened to the user", () => {
  cy.url().should("contain", Cypress.env("editAccountDetailsPage"));
});

When("A user cliks on Change Password tile", () => {
  cy.get(accountPage.tiles.container).within(() => {
    cy.get(accountPage.tiles.changePassword).click();
  });
});

Then("The Change Password page is opened to the user", () => {
  cy.url().should("contain", Cypress.env("changePasswordPage"));
});

When("A user cliks on Manage Address Book tile", () => {
  cy.get(accountPage.tiles.container).within(() => {
    cy.get(accountPage.tiles.manageAddressBook).click();
  });
});

Then("The Manage Address Book page is opened to the user", () => {
  cy.url().should("contain", Cypress.env("addressBookPage"));
});

When("A user cliks on Wishlist tile", () => {
  cy.get(accountPage.tiles.container).within(() => {
    cy.get(accountPage.tiles.wishList).click();
  });
});

Then("The Wishlist page is opened to the user", () => {
  cy.url().should("contain", Cypress.env("wishlistPage"));
});

When("A user cliks on Order History tile", () => {
  cy.get(accountPage.tiles.container).within(() => {
    cy.get(accountPage.tiles.orderHistory).click();
  });
});

Then("The Order History page is opened to the user", () => {
  cy.url().should("contain", Cypress.env("orderHistoryPage"));
});

When("A user cliks on Transaction History tile", () => {
  cy.get(accountPage.tiles.container).within(() => {
    cy.get(accountPage.tiles.transactionHistory).click();
  });
});

Then("The Transaction History page is opened to the user", () => {
  cy.url().should("contain", Cypress.env("transactionHistoryPage"));
});

When("A user cliks on Downloads tile", () => {
  cy.get(accountPage.tiles.container).within(() => {
    cy.get(accountPage.tiles.downloads).click();
  });
});

Then("The Downloads page is opened to the user", () => {
  cy.url().should("include", Cypress.env("downloadsPage"));
});

When("A user cliks on Notifications tile", () => {
  cy.get(accountPage.tiles.container).within(() => {
    cy.get(accountPage.tiles.notifications).click();
  });
});

Then("The Notifications page is opened to the user", () => {
  cy.url().should("contain", Cypress.env("notificationsPage"));
});

When("A user cliks on Logoff tile", () => {
  cy.get(accountPage.tiles.container).within(() => {
    cy.get(accountPage.tiles.logoff).click();
  });
});

Then("The Logoff page is opened to the user", () => {
  cy.url().should("contain", Cypress.env("logoffPage"));
});

Then("A message with text {string} is displayed", (logoffSuccessMessage) => {
  cy.contains(logoffSuccessMessage).should("be.visible");
});
