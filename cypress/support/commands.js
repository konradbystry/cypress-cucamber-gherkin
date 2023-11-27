import loginPage from "../fixtures/selectors/loginPage.json";
import addressBookPage from "../fixtures/selectors/addressBookPage.json";
import routes from "../fixtures/routes.json";

Cypress.Commands.add("login", (username, password) => {
  cy.session([username, password], () => {
    cy.visit(routes.loginPage)
      .url()
      .should("contain", routes.loginPage)
      .get(loginPage.usernameInput)
      .type(username)
      .get(loginPage.passwordInput)
      .type(password)
      .get(loginPage.loginButton)
      .click();
  });
});

Cypress.Commands.add("loginUser", ({ username, password }) => {
  cy.session([username, password], () => {
    cy.visit(routes.loginPage)
      .url()
      .should("contain", routes.loginPage)
      .get(loginPage.usernameInput)
      .type(username)
      .get(loginPage.passwordInput)
      .type(password)
      .get(loginPage.loginButton)
      .click();
  });
});

Cypress.Commands.add(
  "fillNewAddressForm",
  (firstname, lastname, company, address1, city, region, zip, country) => {
    cy.get(addressBookPage.addressForm.firstnameInput)
      .type(firstname)
      .get(addressBookPage.addressForm.lastnameInput)
      .type(lastname)
      .get(addressBookPage.addressForm.companyInput)
      .type(company)
      .get(addressBookPage.addressForm.address1Input)
      .type(address1)
      .get(addressBookPage.addressForm.cityInput)
      .type(city)
      .get(addressBookPage.addressForm.selectCountryInput)
      .select(country)
      .get(addressBookPage.addressForm.selectRegionInput)
      .select(region)
      .get(addressBookPage.addressForm.zipInput)
      .type(zip);
  }
);

Cypress.Commands.add(
  "addNewAddress",
  (firstname, lastname, company, address1, city, region, zip, country) => {
    cy.visit(routes.addNewAddressPage)
      .url()
      .should("contain", routes.addNewAddressPage)
      .fillNewAddressForm(
        firstname,
        lastname,
        company,
        address1,
        city,
        region,
        zip,
        country
      )
      .get(addressBookPage.addressForm.continueButton)
      .click();
  }
);
