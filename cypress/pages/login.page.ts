const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';
const inventoryTitle = '.title';
const loginError = '[data-test="error"]';
const errorCloseButton = '.error-button';

export class LoginPage {
  visit() {
    cy.navigateTo('/');
  }

  enterUsername(username: string) {
    cy.get(usernameInput).clear().type(username);
  }

  enterPassword(password: string) {
    cy.get(passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(loginButton).click();
  }

  assertOnInventoryPage() {
    cy.url().should('include', '/inventory.html');
    cy.get(inventoryTitle).should('contain', 'Products');
  }

  assertLoginFormVisible() {
    cy.get(usernameInput).should('be.visible');
    cy.get(passwordInput).should('be.visible');
    cy.get(loginButton).should('be.visible');
  }

  assertLoginErrorVisible(expectedMessage: string) {
    cy.get(loginError).should('be.visible').and('contain.text', expectedMessage);
  }

  closeErrorMessage() {
    cy.get(errorCloseButton).click();
  }

  assertErrorMessageNotVisible() {
    cy.get(loginError).should('not.exist');
  }
}
