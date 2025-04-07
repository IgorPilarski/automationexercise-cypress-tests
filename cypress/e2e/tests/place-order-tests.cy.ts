import cartTable from '../components/cart-table-component';
import navbar from '../components/navbar-component';
import productsList from '../components/product-list-component';
import cartPage from '../pages/cart-page';
import checkoutPage from '../pages/checkout-page';
import homePage from '../pages/home-page';
import loginPage from '../pages/login-page';
import users from '../../fixtures/usersData.json';

describe('Place Order tests', () => {
  it(`Given: user is on home page
      When: user adds products to the cart
      And: proceeds to checkout
      And: registers a new account during checkout
      Then: user should be able to place the order successfully
      And: see a success message and delete the account afterwards`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    productsList.addFirstProductsToCart(3);
    productsList.goToCartAfterAddingProduct();
    cartPage.visitAndVerifyCartWithItemsLoaded();
    cartPage.goToCheckout();
    checkoutPage.goToLoginFromCheckout();
    loginPage.registerRandomUser();
    navbar.goTo('cartPage');
    cartTable.saveCartItems();
    cartPage.goToCheckout();
    checkoutPage.verifyUserDetailsInCheckout(users.randomEmailUser);
    checkoutPage.verifyReviewYourOrder();
    cartTable.compareCheckoutWithSavedCartItems();
    checkoutPage.completeCheckout();
    checkoutPage.enterPaymentDetails();
    checkoutPage.confirmPaymentDetails();
    checkoutPage.verifyOrderCompleted();
    navbar.deleteCurrentUser();
  });

  it(`Given: user is on home page
      When: user registers a new account
      And: adds products to the cart
      And: proceeds to checkout
      Then: user should be able to place the order successfully
      And: see a success message 
      And: delete the account afterwards`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    navbar.goTo('loginPage');
    loginPage.registerRandomUser();
    productsList.addFirstProductsToCart(3);
    navbar.goTo('cartPage');
    cartPage.visitAndVerifyCartWithItemsLoaded();
    cartTable.saveCartItems();
    cartPage.goToCheckout();
    checkoutPage.verifyUserDetailsInCheckout(users.randomEmailUser);
    cartTable.compareCheckoutWithSavedCartItems();
    checkoutPage.completeCheckout();
    checkoutPage.enterPaymentDetails();
    checkoutPage.confirmPaymentDetails();
    checkoutPage.verifyOrderCompleted();
    navbar.deleteCurrentUser();
  });
  it(`Given: user is on home page
      When: user logs in to an existing account
      And: adds products to the cart
      And: proceeds to checkout
      Then: user should be able to place the order successfully
      And: see a success message and delete the account afterwards`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    navbar.goTo('loginPage');
    loginPage.login(
      users.simpleLoginUser.email,
      users.simpleLoginUser.password,
      users.simpleLoginUser.firstName
    );
    productsList.addFirstProductsToCart(3);
    navbar.goTo('cartPage');
    cartPage.visitAndVerifyCartWithItemsLoaded();
    cartTable.saveCartItems();
    cartPage.goToCheckout();
    checkoutPage.verifyUserDetailsInCheckout(users.simpleLoginUser);
    cartTable.compareCheckoutWithSavedCartItems();
    checkoutPage.completeCheckout();
    checkoutPage.enterPaymentDetails();
    checkoutPage.confirmPaymentDetails();
    checkoutPage.verifyOrderCompleted();
  });
  it(`Given: user is on home page
    When: user registers a new account
    And: adds products to the cart
    And: proceeds to checkout
    Then: delivery and billing addresses should match the address provided during registration
    And: user should be able to delete the account afterwards`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    navbar.goTo('loginPage');
    loginPage.registerRandomUser();
    productsList.addFirstProductsToCart(3);
    navbar.goTo('cartPage');
    cartPage.visitAndVerifyCartWithItemsLoaded();
    cartPage.goToCheckout();
    checkoutPage.verifyDeliveryAddress();
    checkoutPage.verifyBillingAddress();
    navbar.deleteCurrentUser();
  });
  it(`Given: user is on home page
    When: user adds products to the cart
    And: registers a new account during checkout
    And: places an order successfully
    Then: user should be able to download the invoice
    And: user should be able to delete the account afterwards`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    productsList.addFirstProductsToCart(4);
    navbar.goTo('cartPage');
    cartPage.visitAndVerifyCartWithItemsLoaded();
    cartPage.goToCheckout();
    checkoutPage.goToLoginFromCheckout();
    loginPage.registerRandomUser();
    navbar.goTo('cartPage');
    cartPage.goToCheckout();
    checkoutPage.verifyUserDetailsInCheckout;
    checkoutPage.completeCheckout();
    checkoutPage.enterPaymentDetails();
    checkoutPage.confirmPaymentDetails();
    checkoutPage.downloadInvoice();
    checkoutPage.verifyOrderCompleted();
    navbar.deleteCurrentUser();
  });
});
