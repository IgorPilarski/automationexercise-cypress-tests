import navbar from '../components/navbar-component';
import productsList from '../components/product-list-component';
import cartPage from '../pages/cart-page';
import homePage from '../pages/home-page';

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
});
