describe('Verify All Products and product detail page', () => {
  it(`Given: the user is on the home page
      When: the user navigates to the Products page 
      And: visits the first product
      Then: the product details page should be visible with product information`, () => {
    cy.visit("");
    cy.verifyHomePageLoaded()
    cy.goTo("productsPage");
    cy.verifyProductsPageLoaded();
    cy.visitAndVerifyProductPage(2);
    })

  it(`Given: user is on home page
      When: user navigates to Products page and searches for a product
      Then: the 'SEARCHED PRODUCTS' section should be visible
      And: all related products should be displayed`, () => {
    cy.visit("");
    cy.verifyHomePageLoaded() ;
    cy.goTo("productsPage");
    cy.verifyProductsPageLoaded();
    cy.searchAndVerifyProduct("Women", 2)
    })

  it.only(`Given: user is on home page
      When: user adds two products to the cart
      And: navigates to the cart page
      Then: both products should be in the cart with correct prices quantity, and total price`, () => {
    cy.visit("");
    cy.verifyHomePageLoaded() ;
    cy.goTo("productsPage");
    cy.verifyProductsPageLoaded();
    cy.addFirstProductsToCart(2);
    cy.verifyCartContents();
    })

})

