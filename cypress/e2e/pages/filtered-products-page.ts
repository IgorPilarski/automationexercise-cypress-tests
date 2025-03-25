class FilteredProductsPage {
  visitAndVerifyFilteredProductsPageLoaded(): void {
    cy.url().should('eq', 'https://automationexercise.com/category_products/1');
    cy.get('h2').contains('Category').should('be.visible');
    cy.get('h2.title.text-center').should('contain', 'All Products');
    cy.get('h2').contains('Brands').should('be.visible');
    cy.get('input#search_product').should('be.visible');
    cy.get('div.features_items').should('be.visible');
  }
}

const filteredProductsPage = new FilteredProductsPage();
export default filteredProductsPage;
