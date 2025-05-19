const productNameLocator = '[data-test="inventory-item-name"]';
const productDescriptionLocator = '[data-test="inventory-item-desc"]';
const productPriceLocator = '[data-test="inventory-item-price"]';

export class ProductsPage {
  getProductDescriptionByName(productName: string): Cypress.Chainable<string> {
    return cy.contains(productNameLocator, productName)
      .parents('[data-test="inventory-item"]')
      .find(productDescriptionLocator)
      .invoke('text');
  }

  getProductPriceByName(productName: string): Cypress.Chainable<string> {
    return cy.contains(productNameLocator, productName)
      .parents('[data-test="inventory-item"]')
      .find(productPriceLocator)
      .invoke('text');
  }

  clickProductByName(productName: string) {
    cy.contains(productNameLocator, productName)
      .should('be.visible')
      .click();
  }
}
