class ProductsPage {
    visitAndVerifyAllProductsPageLoaded(): void {
        cy.url().should('eq', 'https://automationexercise.com/products')
        cy.get('h2').contains("Category").should('be.visible');
        cy.get('h2.title.text-center').should("contain", "All Products")
        cy.get('h2').contains("Brands").should('be.visible');
        cy.get('input#search_product').should('be.visible');
        cy.get('img#sale_image, .sale img').should('be.visible');
        cy.get('div.features_items').should('be.visible');
    }
    searchAndVerifyProduct(productName: string, amountOfProducts: number):void{
        cy.get('input#search_product').type(productName)
        cy.get('i.fa.fa-search').click()
        cy.get('h2.title.text-center').should('contain', 'Searched Products')
        cy.get('.product-overlay').should('have.length', amountOfProducts)
    }
  }

  
  const productsPage = new ProductsPage();
  export default productsPage;