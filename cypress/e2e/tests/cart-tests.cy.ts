import navbar from '../components/navbar-component';
import productsList from '../components/product-list-component';
import cartPage from '../pages/cart-page';
import homePage from '../pages/home-page';
import loginPage from '../pages/login-page';
import productsPage from '../pages/products-page';

describe('Cart page tests', () => {
  it(`Given: user is on home page
      When: user adds products to the cart
      And: navigates to the cart page
      And: removes a product from the cart
      Then: the product should no longer be visible in the cart`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    productsList.addFirstProductsToCart(4);
    navbar.goTo('cartPage');
    cartPage.deleteAllProductsFromCart();
    cartPage.verifyCartIsEmpty();
  });
  it(`Given: user is on home page
    When: user adds product to the cart
    And: navigates to the cart page
    And: removes a product from the cart
    Then: the product should be removed 
    And: no longer visible in the cart`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    productsList.addProductToCartByName('Fancy Green Top');
    productsList.goToCartAfterAddingProduct();
    cartPage.visitAndVerifyCartWithItemsLoaded();
    cartPage.deleteProductByNameFromCart('Fancy Green Top');
    cartPage.verifyLastProductHasBeenDeleted();
  });

  it.only(`Given: user is on home page
      When: user searches for a product
      And: adds search results to the cart
      And: navigates to the cart page
      And: logs in to an existing account
      Then: the products from search should remain visible in the cart after login`, () => {
    cy.visit('');
    navbar.goTo('productsPage');
    productsPage.visitAndVerifyAllProductsPageLoaded();
    productsPage.searchAndVerifyResult('Cotton');
    productsPage.addSearchedProductsToCart();
    navbar.goTo('cartPage');
    cartPage.verifyProductNames();
    navbar.goTo('loginPage');
    loginPage.login();
    navbar.goTo('cartPage');
    cartPage.verifyProductNames();
    cartPage.deleteAllProductsFromCart();
  });
});
