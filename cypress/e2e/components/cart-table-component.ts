class CartTable {
  saveCartItems(): void {
    const cartItems: any[] = [];

    cy.get('table.table-condensed tbody tr[id^="product"]')
      .each(($row) => {
        const item = {
          name: $row.find('.cart_description h4 a').text().trim(),
          price: $row.find('.cart_price p').text().trim(),
          quantity: $row.find('.cart_quantity button').text().trim(),
          total: $row.find('.cart_total_price').text().trim(),
        };

        cartItems.push(item);
      })
      .then(() => {
        cy.wrap(cartItems).as('savedCartItems');
      });
  }

  compareCheckoutWithSavedCartItems(): void {
    const currentItems: any[] = [];

    cy.get('table.table-condensed tbody tr[id^="product"]')
      .each(($row) => {
        const item = {
          name: $row.find('.cart_description h4 a').text().trim(),
          price: $row.find('.cart_price p').text().trim(),
          quantity: $row.find('.cart_quantity button').text().trim(),
          total: $row.find('.cart_total_price').text().trim(),
        };

        currentItems.push(item);
      })
      .then(() => {
        cy.get('@savedCartItems').then((savedItems) => {
          expect(currentItems).to.deep.equal(savedItems);
        });
      });
  }
}

const cartTable = new CartTable();
export default cartTable;
