import brandsComponent from '../components/brand-filter-component';
import brands from '../components/brand-filter-component';
import categories from '../components/category-filter-component';
import navbar from '../components/navbar-component';
import productsList from '../components/product-list-component';
import filteredProductsPage from '../pages/filtered-products-page';
import homePage from '../pages/home-page';
import productsPage from '../pages/products-page';

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
  it(`Given: user is on home page
    When: user navigates to Products page
    And: selects a brand from the sidebar
    Then: user should see brand-specific products
    And: can switch to another brand and see its products as well`, () => {
    cy.visit('');
    navbar.goTo('productsPage');
    brandsComponent.verifyBrandsComponentIsDisplayed();
    brands.enterTheBrand('Polo');
    filteredProductsPage.verifyFilteredProductsPageLoaded();
    brands.enterTheBrand('Kookie Kids');
    filteredProductsPage.verifyFilteredProductsPageLoaded();
    productsList.verifyAnyProductIsVisible();
  });
});
