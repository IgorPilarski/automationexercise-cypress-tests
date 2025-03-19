describe('Verify All Products and product detail page', () => {
  it(`Given: the user is on the home page
      When: the user navigates to the Products page and visits the first product
      Then: the product details page should be visible with product information`, () => {
    cy.visit("");
    cy.goTo("productsPage");
    cy.verifyProductsPageLoaded();
    cy.visitAndVerifyProductPage(2);
})
})

