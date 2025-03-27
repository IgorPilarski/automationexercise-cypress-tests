class ProductsList {
  // Adds the specified number of products to the cart starting from the first one in the product list:
  addFirstProductsToCart(amount: number): void {
    for (let i = 1; i <= amount; i++) {
      cy.get(`a[data-product-id="${i}"]`).eq(0).trigger('mouseover').click();
      if (i < amount) {
        cy.get('button.btn.btn-success.close-modal.btn-block').click();
      }
      cy.log(`added product number: ${i}`);
    }
  }

  addProductToCartByName(productName: string): void {
    cy.contains('p', productName).parents('.single-products').find('a.add-to-cart').eq(0).click();
  }

  goToCartAfterAddingProduct(): void {
    cy.get('p.text-center').contains('View Cart').click();
  }

  // Adds a product to the cart by its index in the product list:
  addProductToCartByIndex(number: number): void {
    cy.get('a.btn.btn-default.add-to-cart')
      .eq(number * 2 - 2)
      .click();
  }
  verifyAnyProductIsVisible(): void {
    cy.get('div.product-overlay').should('be.visible');
  }
}

const productsList = new ProductsList();
export default productsList;
