type allBrandNames =
  | 'Polo'
  | 'H&M'
  | 'Madame'
  | 'Mast & Harbour'
  | 'Babyhug'
  | 'Allen Solly Junior'
  | 'Kookie Kids'
  | 'Biba';

class Brands {
  verifyBrandsComponentIsDisplayed(): void {
    cy.get('div.brands_products h2').should('contain.text', 'Brands');
    const allBrands: allBrandNames[] = [
      'Polo',
      'H&M',
      'Madame',
      'Mast & Harbour',
      'Babyhug',
      'Allen Solly Junior',
      'Kookie Kids',
      'Biba',
    ];

    allBrands.forEach((brand) => {
      cy.get('.brands-name a')
        .contains(brand)
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', `/brand_products/`);
    });
  }

  enterTheBrand(brandName: allBrandNames): void {
    cy.get('.brands-name a').each(($el) => {
      const text = $el.text().trim();
      if (text.includes(brandName)) {
        const href = $el.attr('href');

        cy.wrap(href).as('filterUrl');
        cy.wrap('Brand' + ' - ' + brandName).as('filterName');
        cy.wrap($el).click();
        return false;
      }
    });
  }
}

const brands = new Brands();
export default brands;
