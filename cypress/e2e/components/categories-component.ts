type ParentCategory = 'Women' | 'Men' | 'Kids';

type CategoryName = 'Dress' | 'Tops' | 'Saree' | 'Tshirts' | 'Jeans' | 'Tops & Shirts';

class Categories {
  verifyCategoriesComponentIsDisplayed(): void {
    cy.get('div.left-sidebar h2').eq(0).should('contain', 'Category');
    cy.get('div.panel-group.category-products div.panel.panel-default');

    //fixes to be made!!!: wrong page numbers in hrefs
    const womenSubcategories = [
      { name: 'Dress', href: '/category_products/1' },
      { name: 'Tops', href: '/category_products/2' },
      { name: 'Saree', href: '/category_products/7' },
    ];
    womenSubcategories.forEach((sub) => {
      cy.get(`#Women a[href="${sub.href}"]`).should('be.visible').and('contain.text', sub.name);
    });

    cy.contains('.panel-title a', 'Men').should('be.visible').click();
    const menSubcategories = [
      { name: 'Tshirts', href: '/category_products/3' },
      { name: 'Jeans', href: '/category_products/6' },
    ];
    menSubcategories.forEach((sub) => {
      cy.get(`#Men a[href="${sub.href}"]`).should('be.visible').and('contain.text', sub.name);
    });

    cy.contains('.panel-title a', 'Kids').should('be.visible').click();
    const kidsSubcategories = [
      { name: 'Dress', href: '/category_products/4' },
      { name: 'Tops & Shirts', href: '/category_products/5' },
    ];
    kidsSubcategories.forEach((sub) => {
      cy.get(`#Kids a[href="${sub.href}"]`).should('be.visible').and('contain.text', sub.name);
    });
  }

  //fixes to be made!!!: parent needs to be clicked first
  enterTheCategory(parentCategory: ParentCategory, categoryName: CategoryName): void {
    cy.contains('.panel-title a', parentCategory);

    cy.get(`#${parentCategory} .panel-body a`).each(($el) => {
      const text = $el.text().trim();
      if (text === categoryName.trim()) {
        cy.wrap($el).click();
        return false;
      }
    });
  }
}

const categories = new Categories();
export default categories;
