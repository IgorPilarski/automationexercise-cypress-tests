class FilteredProductsPage {
  verifyFilteredProductsPageLoaded(): void {
    cy.get('@filterUrl').then((url) => {
      const value = url as unknown as string;
      cy.url().should('include', encodeURI(value));
    });
    cy.get('h2').contains('Category').should('be.visible');

    cy.get('@filterName').then((filterName) => {
      cy.get('div.features_items h2.title.text-center').should('contain', filterName);
    });
    cy.get('h2.title.text-center').should('contain', 'Products');
    cy.get('h2').contains('Brands').should('be.visible');
    cy.get('div.features_items').should('be.visible');
  }
}

const filteredProductsPage = new FilteredProductsPage();
export default filteredProductsPage;
