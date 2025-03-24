import productsList from "../components/product-list-component";
import cartPage from "../pages/cart-page";
import checkoutPage from "../pages/checkout-page";
import homePage from "../pages/home-page";
import loginPage from "../pages/login-page";

describe('Place Order tests', () => {
    it(`Given: user is on home page
        When: user adds products to the cart
        And: proceeds to checkout
        And: registers a new account during checkout
        Then: user should be able to place the order successfully
        And: see a success message and delete the account afterwards`, () => {
      cy.visit("");
      homePage.verifyHomePageLoaded();
      productsList.addFirstProductsToCart(3);
      productsList.goToCartAfterAddingProduct();
      cartPage.visitAndVerifyCartWithItemsLoaded();
      cartPage.goToCheckout();
      checkoutPage.goToLoginFromCheckout()
      loginPage.registerRandomUser()
      cy.goTo('cartPage')
      cartPage.goToCheckout();
      checkoutPage.verifyUserDetailsInCheckout("randomEmailUser")
      })
})