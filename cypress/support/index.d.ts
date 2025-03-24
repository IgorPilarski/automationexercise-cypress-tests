/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    goTo(page: string): Chainable<void>;
//    verifyHomePageLoaded(): Chainable<void>;
//    login(email?: string, password?: string, name?: string): Chainable<void>;
    logout(): Chainable<void>;
//    tryLoginWithInvalidUser(email: string, password: string): Chainable<void>;
    // registerRandomUser(): Chainable<void>;
//    deleteCurrentUser(): Chainable<void>;
//    tryToRegisterExistingUser(name: string, email: string): Chainable<void>;
//    completeAndConfirmFormSubmission(name?: string, email?: string, subject?: string, message?: string): Chainable<void>;
    
    // visitAndVerifyTestCasesPageLoaded(): Chainable<void>;
    // visitAndVerifyAllProductsPageLoaded(): Chainable<void>;
    // visitAndVerifyProductDetailsPageLoaded(index: number): Chainable<void>;
    visitAndVerifyCartWithItemsLoaded(): Chainable<void>;

    // searchAndVerifyProduct(productName: string, amountOfProducts: number): Chainable<void>;
    subscribeAndVerify(email?: string): Chainable<void>;
    // addFirstProductsToCart(amount: number): Chainable<void>;
    verifyCartAmounts(): Chainable<void>;
    hoverOver(selector: string): Chainable<void>;
    // goToCartAfterAddingProduct(): Chainable<void>;
    verifyCartProductCount(amount: number): Chainable<void>;
    // addProductToCartByIndex(index: number): Chainable<void>;
    // increaseProductQuantity(quantity: number): Chainable<void>;
    // addCurrentProductToCart(): Chainable<void>;
    verifyProductQuantityInCart(): Chainable<void>;
    goToCheckout(): Chainable<void>;
    goToLoginFromCheckout()
    verifyUserDetailsInCheckout(selecterUser: string): Chainable<void>;
  }
}
