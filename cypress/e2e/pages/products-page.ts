class ProductsPage {
  visitAndVerifyAllProductsPageLoaded(): void {
    cy.url().should('eq', 'https://automationexercise.com/products');
    cy.get('h2').contains('Category').should('be.visible');
    cy.get('h2.title.text-center').should('contain', 'All Products');
    cy.get('h2').contains('Brands').should('be.visible');
    cy.get('input#search_product').should('be.visible');
    cy.get('img#sale_image, .sale img').should('be.visible');
    cy.get('div.features_items').should('be.visible');
  }
  // Searches for products by name and verifies that the number of results matches the expected amount:
  searchAndVerifyResult(productName: string): void {
    cy.get('input#search_product').type(productName);
    cy.get('i.fa.fa-search').click();
    cy.get('h2.title.text-center').should('contain', 'Searched Products');
    cy.get('div.productinfo.text-center p').each(($el) => {
      cy.wrap($el).should('contain.text', productName);
    });
    cy.wrap(productName).as('searchedProduct');
  }
  addSearchedProductsToCart(): void {
    const itemsAddedToCart: any[] = [];

    cy.get<string>('@searchedProduct').then((searchedProduct) => {
      cy.get('div.productinfo.text-center p').each(($el) => {
        if ($el.text().includes(searchedProduct)) {
          cy.wrap($el).parents('.single-products').find('a.add-to-cart').eq(0).click();
          cy.get('button.btn.btn-success.close-modal.btn-block').click();
          itemsAddedToCart.push($el.text());
        }
      });
      cy.wrap(itemsAddedToCart).as('itemsAddedToCart');
    });
  }
}

const productsPage = new ProductsPage();
export default productsPage;
