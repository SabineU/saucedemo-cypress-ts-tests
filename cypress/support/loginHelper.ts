export function login(username: string, password: string) {
  cy.navigateTo('/');
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-button"]').click();
}

export function loginAndAssertSuccess(username: string, password: string) {
  login(username, password);
  cy.url().should('include', '/inventory.html');
  cy.get('.title').should('contain', 'Productss');
}
