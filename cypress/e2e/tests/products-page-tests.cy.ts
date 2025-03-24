import homePage from "../pages/home-page";

describe('Verify All Products and product detail page', () => {
  it(`Given: the user is on the home page
      When: the user navigates to the Products page 
      And: visits the first product
      Then: the product details page should be visible with product information`, () => {
    cy.visit("");
    homePage.verifyHomePageLoaded();
    cy.goTo("productsPage");
    cy.visitAndVerifyAllProductsPageLoaded();
    cy.visitAndVerifyProductDetailsPageLoaded(2);
    })

  it(`Given: user is on home page
      When: user navigates to Products page and searches for a product
      Then: the 'SEARCHED PRODUCTS' section should be visible
      And: all related products should be displayed`, () => {
    cy.visit("");
    homePage.verifyHomePageLoaded();
    cy.goTo("productsPage");
    cy.visitAndVerifyAllProductsPageLoaded();
    cy.searchAndVerifyProduct("Women", 2)
    })

  it(`Given: user is on home page
      When: user adds two products to the cart
      And: navigates to the cart page
      Then: both products should be in the cart with correct prices quantity, and total price`, () => {
    cy.visit("");
    homePage.verifyHomePageLoaded();
    cy.goTo("productsPage");
    cy.visitAndVerifyAllProductsPageLoaded();
    cy.addFirstProductsToCart(2);
    cy.goToCartAfterAddingProduct();
    cy.verifyCartProductCount(2)
    cy.verifyCartAmounts();
    })

  it(`Given: user is on home page
      When: user views a product
      And: sets its quantity to the specified amount
      And: adds it to the cart
      And: navigates to the cart page
      Then: the product should be in the cart with the specified quantity`, () => {
  cy.visit("");
  homePage.verifyHomePageLoaded();
  cy.visitAndVerifyProductDetailsPageLoaded(5)
  cy.increaseProductQuantity(4);
  cy.addCurrentProductToCart()
  cy.goToCartAfterAddingProduct()
  cy.verifyProductQuantityInCart()
  })
})

