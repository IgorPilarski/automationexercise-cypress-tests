import categories from '../components/categories-component';
import filteredProductsPage from '../pages/filtered-products-page';
import homePage from '../pages/home-page';

describe('Filters tests', () => {
  it(`Given: user is on home page
    When: user views a subcategory under 'Women' category
    And: then views a subcategory under 'Men' category
    Then: corresponding category pages should be displayed`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    categories.verifyCategoriesComponentIsDisplayed();
    categories.enterTheCategory('Women', 'Tops');
    filteredProductsPage.verifyFilteredProductsPageLoaded();
    categories.enterTheCategory('Men', 'Jeans');
    filteredProductsPage.verifyFilteredProductsPageLoaded();
  });
});
