import { login } from '../../support/loginHelper';
import { ProductsPage } from '../../pages/products.page';
import { ProductDetailsPage } from '../../pages/productDetails.page';

const productsPage = new ProductsPage();
const productDetailsPage = new ProductDetailsPage();

describe('Inventory - Product Details Navigation', () => {
  beforeEach(() => {
    cy.suppressTelemetry();
    cy.fixture('login').as('loginData');
  });

  it('should navigate to product details and match product name, description, and price', function () {
    login(this.loginData.validUser.username, this.loginData.validUser.password);

    const productName = 'Sauce Labs Backpack';

    // Step 1: Capture description and price from product list
    productsPage.getProductDescriptionByName(productName).then((descriptionFromListPage) => {
      productsPage.getProductPriceByName(productName).then((priceFromListPage) => {
        
        // Step 2: Click product
        productsPage.clickProductByName(productName);

        // Step 3: Assert everything matches
        productDetailsPage.assertOnProductDetailsUrl();
        productDetailsPage.assertProductNameVisible(productName);
        productDetailsPage.assertProductDescriptionMatches(descriptionFromListPage.trim());
        productDetailsPage.assertProductPriceMatches(priceFromListPage.trim());

      });
    });
  });
  
});
