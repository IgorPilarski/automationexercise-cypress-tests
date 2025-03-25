class CartPage {
  visitAndVerifyCartWithItemsLoaded(): void {
    cy.url().should('eq', 'https://automationexercise.com/view_cart');
    cy.get('li.active').should('contain', 'Shopping Cart');
    cy.get('td.image').should('contain', 'Item');
    cy.get('td.description').should('contain', 'Description');
    cy.get('td.price').should('contain', 'Price');
    cy.get('td.quantity').should('contain', 'Quantity');
    cy.get('td.total').should('contain', 'Total');
  }

  // Verifies unit prices and total prices (unit price × quantity) of specific products in the cart:
  verifyCartAmounts(): void {
    cy.get('tbody tr').then(($rows) => {
      const rowCount = $rows.length;

      for (let i = 0; i < rowCount; i++) {
        cy.get('tbody tr')
          .eq(i)
          .then(($row) => {
            cy.get('td.cart_price')
              .eq(i)
              .invoke('text')
              .then((priceAmount) => {
                const price = parseInt(priceAmount.replace(/[^\d]/g, ''), 10);
                cy.get('td.cart_quantity')
                  .eq(i)
                  .invoke('text')
                  .then((quantityValue) => {
                    const quantity = parseInt(quantityValue.trim(), 10);
                    const expectedTotal = price * quantity;

                    cy.get('td.cart_total')
                      .eq(i)
                      .invoke('text')
                      .then((totalAmount) => {
                        const actualTotal = parseInt(totalAmount.replace(/[^\d]/g, ''), 10);
                        expect(actualTotal).to.eq(expectedTotal);
                      });
                  });
              });
          });
      }
    });
  }

  // Verifies the number of distinct products in the cart (regardless of quantity):
  verifyCartProductCount(amount: number): void {
    cy.get('i.fa.fa-times').should('have.length', amount);
  }

  verifyProductQuantityInCart(): void {
    cy.get('@productQuantity').then((expectedQantity) => {
      cy.get('td.cart_quantity button.disabled')
        .invoke('text')
        .then((text) => {
          const quantity = parseInt(text.trim());
          expect(quantity).to.eq(expectedQantity);
        });
    });
  }
  goToCheckout(): void {
    cy.get('a.btn.btn-default.check_out').click();
  }
  deleteAllProductsFromCart(): void {
    cy.get('table.table-condensed tbody tr[id^="product"]').each(($row) => {
      cy.wrap($row).find('i.fa.fa-times').click();
      cy.wrap($row).should('not.exist');
      cy.log('deleted the item');
    });
  }
  verifyCartIsEmpty(): void {
    cy.get('span p.text-center')
      .should('contain', 'Cart is empty!')
      .and('contain', 'Click')
      .and('contain', 'to buy products.');
    cy.get('a[href="/products"]').should('contain.text', 'here');
  }
}

const cartPage = new CartPage();
export default cartPage;
