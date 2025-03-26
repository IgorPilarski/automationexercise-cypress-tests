class FilteredProductsPage {
  verifyFilteredProductsPageLoaded(): void {
    cy.get('@filterUrl').then((filterUrl) => {
      cy.url().should('include', filterUrl);
    });
    cy.get('h2').contains('Category').should('be.visible');
    cy.get('h2.title.text-center').should('contain', 'Products');
    cy.get('@categoryName').then((categoryName) => {
      cy.get('div.features_items h2.title.text-center').should('contain', categoryName);
    });
    cy.get('h2').contains('Brands').should('be.visible');
    cy.get('div.features_items').should('be.visible');
  }
}

const filteredProductsPage = new FilteredProductsPage();
export default filteredProductsPage;
