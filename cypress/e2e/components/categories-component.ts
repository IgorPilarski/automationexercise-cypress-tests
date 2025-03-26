type ParentCategory = 'Women' | 'Men' | 'Kids';

type CategoryName = 'Dress' | 'Tops' | 'Saree' | 'Tshirts' | 'Jeans' | 'Tops & Shirts';

class Categories {
  verifyCategoriesComponentIsDisplayed(): void {
    cy.get('div.left-sidebar h2').should('contain.text', 'Category');

    const women = ['Dress', 'Tops', 'Saree'];
    const men = ['Tshirts', 'Jeans'];
    const kids = ['Dress', 'Tops & Shirts'];
    this.checkCategory('Women', women);
    this.checkCategory('Men', men);
    this.checkCategory('Kids', kids);
    cy.reload();
  }

  private checkCategory(categoryName: string, subcategories: string[]): void {
    cy.contains('.panel-title a ', categoryName).click();
    subcategories.forEach((sub) => {
      cy.get(`#${categoryName} .panel-body a`)
        .contains(sub)
        .should('be.visible')
        .and('have.attr', 'href')
        .and('include', '/category_products');
    });
  }

  enterTheCategory(parentCategory: ParentCategory, subCategoryName: CategoryName): void {
    cy.contains('.panel-title a', parentCategory).click();
    cy.get(`#${parentCategory} .panel-body a`).each(($el) => {
      const text = $el.text().trim();
      if (text === subCategoryName.trim()) {
        const href = $el.attr('href');
        cy.wrap(href).as('filterUrl');

        cy.wrap($el).click();

        cy.wrap(parentCategory + ' - ' + subCategoryName).as('categoryName');

        return false;
      }
    });
  }
}

const categories = new Categories();
export default categories;
