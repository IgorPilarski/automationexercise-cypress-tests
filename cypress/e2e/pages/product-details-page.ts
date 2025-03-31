class ProductDetailsPage {
  visitAndVerifyProductDetailsPageLoaded(index: number): void {
    cy.get(`a[href*="/product_details/"]`)
      .eq(index - 1)
      .click();
    cy.url().should('eq', `https://automationexercise.com/product_details/${index}`);
    cy.get('.product-information h2').should('be.visible');
    cy.get('p').contains('Category').should('be.visible');
    cy.get('span').contains('Rs.').should('be.visible');
    cy.get('p').contains('Availability:').should('be.visible');
    cy.get('p').contains('Condition:').should('be.visible');
    cy.get('p').contains('Brand:').should('be.visible');
  }
  increaseProductQuantity(quantity: number) {
    cy.get('#quantity').clear().type(quantity.toString());
    cy.wrap(quantity).as('productQuantity');
  }
  addCurrentProductToCart(): void {
    cy.get('button.btn.btn-default.cart').click();
  }
  completeProductReviewForm(name: string, email: string, review: string): void {
    cy.get('div.category-tab.shop-details-tab a').should('contain', 'Write Your Review');
    cy.get('div#reviews input#name').type(name);
    cy.get('div#reviews input#email').type(email);

    cy.get('div#reviews input#review').type(review);
    cy.get('button#button-review').click();
  }
}

const productDetailsPage = new ProductDetailsPage();
export default productDetailsPage;
