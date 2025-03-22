describe('Place Order tests', () => {
    it(`Given: user is on home page
        When: user adds products to the cart
        And: proceeds to checkout
        And: registers a new account during checkout
        Then: user should be able to place the order successfully
        And: see a success message and delete the account afterwards`, () => {
      cy.visit("");
      cy.verifyHomePageLoaded();
      cy.addFirstProductsToCart(3);
      cy.goToCartAfterAddingProduct();
      cy.visitAndVerifyCartWithItemsLoaded();
      cy.goToCheckout();
      cy.goToLoginFromCheckout()
      cy.registerRandomUser()
      cy.goTo('cartPage')
      cy.goToCheckout();
      })
})