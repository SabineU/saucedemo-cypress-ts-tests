import { LoginPage } from '../../pages/login.page';

const loginPage = new LoginPage();

describe('SauceDemo Login Tests', () => {
  beforeEach(() => {
    cy.suppressTelemetry();
    cy.fixture('login').as('loginData');
  });

  it('TC-LOG-001: Valid login with standard_user', function () {
    loginPage.visit();
    loginPage.assertLoginFormVisible();
    loginPage.enterUsername(this.loginData.validUser.username);
    loginPage.enterPassword(this.loginData.validUser.password);
    loginPage.clickLogin();
    loginPage.assertOnInventoryPage();
  });

  it('TC-LOG-002: Invalid username with valid password', function () {
    loginPage.visit();
    loginPage.assertLoginFormVisible();
    loginPage.enterUsername(this.loginData.invalidUser.username);
    loginPage.enterPassword(this.loginData.invalidUser.password);
    loginPage.clickLogin();
    loginPage.assertLoginErrorVisible("Epic sadface: Username and password do not match any user in this service");
  });

  it('TC-LOG-003: Valid username with invalid password', function () {
    loginPage.visit();
    loginPage.assertLoginFormVisible();
    loginPage.enterUsername(this.loginData.invalidPasswordUser.username);
    loginPage.enterPassword(this.loginData.invalidPasswordUser.password);
    loginPage.clickLogin();
    loginPage.assertLoginErrorVisible("Epic sadface: Username and password do not match any user in this service");
  });

  it('TC-LOG-004: Invalid username and invalid password', function () {
    loginPage.visit();
    loginPage.assertLoginFormVisible();
    loginPage.enterUsername(this.loginData.invalidComboUser.username);
    loginPage.enterPassword(this.loginData.invalidComboUser.password);
    loginPage.clickLogin();
    loginPage.assertLoginErrorVisible("Epic sadface: Username and password do not match any user in this service");
  });

  /*it('TC-LOG-005: Login with empty username and password', function () {
    loginPage.visit();
    loginPage.assertLoginFormVisible();
    loginPage.enterUsername(this.loginData.emptyUser.username);
    loginPage.enterPassword(this.loginData.emptyUser.password);
    loginPage.clickLogin();
    loginPage.assertLoginErrorVisible("Epic sadface: Username is required");
  });*/
  it('TC-LOG-005: Login with empty username and password', function () {
    loginPage.visit();
    loginPage.assertLoginFormVisible();
    
    // Just clear the fields (optional) — or skip entirely
    cy.get('[data-test="username"]').clear();
    cy.get('[data-test="password"]').clear();

    loginPage.clickLogin();
    loginPage.assertLoginErrorVisible("Epic sadface: Username is required");
  });

  it('TC-LOG-006: Login with locked_out_user account', function () {
    loginPage.visit();
    loginPage.assertLoginFormVisible();
    loginPage.enterUsername(this.loginData.lockedOutUser.username);
    loginPage.enterPassword(this.loginData.lockedOutUser.password);
    loginPage.clickLogin();
    loginPage.assertLoginErrorVisible("TEST Epic sadface: Sorry, this user has been locked out.");
  });

  it("TC-LOG-007: Close login error message with X icon", function () {
    loginPage.visit();
    loginPage.assertLoginFormVisible();
    loginPage.enterUsername(this.loginData.invalidUser.username);
    loginPage.enterPassword(this.loginData.invalidUser.password);
    loginPage.clickLogin();
    loginPage.assertLoginErrorVisible("Epic sadface: Username and password do not match any user in this service");
    loginPage.closeErrorMessage();
    loginPage.assertErrorMessageNotVisible();
  });
});
