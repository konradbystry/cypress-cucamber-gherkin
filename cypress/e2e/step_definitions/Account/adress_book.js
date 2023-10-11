import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import addressBookPage from "../../../fixtures/selectors/addressBookPage.json";
import alerts from "../../../fixtures/selectors/alerts.json";
import address from "../../../fixtures/data/address.json";
import { getTimeStamp } from "../../../utils/date";

let newAddressTimeStamp;
let editAddressTimeStamp;

Given("User is logged", () => {
  cy.loginUser(Cypress.env("user"));
});

Given("User is on the Manage Address Book page", () => {
  cy.visit(Cypress.env("addressBookPage"));
});

When("A user clicks on New Address button", () => {
  cy.get(addressBookPage.newAddressButton).click();
});

When("A user fills New Address form", () => {
  newAddressTimeStamp = getTimeStamp();

  cy.fillNewAddressForm(
    address.firstname,
    address.lastname,
    newAddressTimeStamp,
    address.address1,
    address.city,
    address.region,
    address.zip,
    address.country
  );
});

When("A user clicks on Contiune button", () => {
  cy.get(addressBookPage.addressForm.continueButton).click();
});

Then("Address Book page is opened to user", () => {
  cy.url().should("contain", Cypress.env("addressBookPage"));
});

Then("Success message {string} is displayed", (successMessage) => {
  cy.get(alerts.success).contains(successMessage).should("be.visible");
});

Then("New address is visible in Address book", () => {
  cy.get(addressBookPage.addressBox)
    .contains(newAddressTimeStamp)
    .should("be.visible");
});

Given("A user added new address", () => {
  cy.addNewAddress(
    address.firstname,
    address.lastname,
    getTimeStamp(),
    address.address1,
    address.city,
    address.region,
    address.zip,
    address.country
  );
});

When("A user clicks on Delete button", () => {
  cy.get(addressBookPage.deleteAddressButton).first().click();
});

When("A user clicks on Edit button", () => {
  cy.get(addressBookPage.editAddressButton).first().click();
});

When("A user clears Company input", () => {
  cy.get(addressBookPage.addressForm.companyInput).clear();
});

When("A user types new company name into Company input", () => {
  editAddressTimeStamp = getTimeStamp();
  cy.get(addressBookPage.addressForm.companyInput).type(
    "Test " + editAddressTimeStamp
  );
});

Then("Eddited address is visible in Address Book", () => {
  cy.get(addressBookPage.addressBox)
    .contains(editAddressTimeStamp)
    .should("be.visible");
});
