const productNameLocator = '[data-test="inventory-item-name"]';
const productDescriptionLocator = '[data-test="inventory-item-desc"]';
const productPriceLocator = '[data-test="inventory-item-price"]';

export class ProductDetailsPage {
  assertProductNameVisible(expectedName: string) {
    cy.get(productNameLocator)
      .should('be.visible')
      .and('have.text', expectedName);
  }

  assertProductDescriptionMatches(expectedDescription: string) {
    cy.get(productDescriptionLocator)
      .should('be.visible')
      .and('have.text', expectedDescription);
  }

  assertProductPriceMatches(expectedPrice: string) {
    cy.get(productPriceLocator)
      .should('be.visible')
      .and('have.text', expectedPrice);
  }

  assertOnProductDetailsUrl() {
    cy.url().should('include', '/inventory-item.html');
  }
}
