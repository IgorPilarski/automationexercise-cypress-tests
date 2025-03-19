describe('Verify All Products and product detail page', () => {
  it(`Given
      When
      Then`, () => {
    cy.visit("");
    cy.goTo("productsPage");
    cy.verifyProductsPageLoaded();
    cy.visitAndVerifyProductPage(2);
})
})

