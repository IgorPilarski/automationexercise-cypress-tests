import navbar from '../components/navbar-component';
import productsList from '../components/product-list-component';
import cartPage from '../pages/cart-page';
import homePage from '../pages/home-page';
import productDetailsPage from '../pages/product-details-page';
import productsPage from '../pages/products-page';
import review from '../../fixtures/productReviewData.json';
describe('All Products and product detail pages tests', () => {
  it(`Given: the user is on the home page
      When: the user navigates to the Products page 
      And: visits the first product
      Then: the product details page should be visible with product information`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    navbar.goTo('productsPage');
    productsPage.visitAndVerifyAllProductsPageLoaded();
    productDetailsPage.visitAndVerifyProductDetailsPageLoaded(2);
  });

  it(`Given: user is on home page
      When: user navigates to Products page and searches for a product
      Then: the 'SEARCHED PRODUCTS' section should be visible
      And: all related products should be displayed`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    navbar.goTo('productsPage');
    productsPage.visitAndVerifyAllProductsPageLoaded();
    productsPage.searchAndVerifyResult('Women');
  });

  it(`Given: user is on home page
      When: the user navigates to the Products page 
      And: user adds two products to the cart
      And: navigates to the cart page
      Then: both products should be in the cart with correct prices quantity, and total price`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    navbar.goTo('productsPage');
    productsPage.visitAndVerifyAllProductsPageLoaded();
    productsList.addFirstProductsToCart(2);
    productsList.goToCartAfterAddingProduct();
    cartPage.verifyCartProductCount(2);
    cartPage.verifyCartAmounts();
  });

  it(`Given: user is on home page
      When: user views a product
      And: sets its quantity to the specified amount
      And: adds it to the cart
      And: navigates to the cart page
      Then: the product should be in the cart with the specified quantity`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    productDetailsPage.visitAndVerifyProductDetailsPageLoaded(5);
    productDetailsPage.increaseProductQuantity(4);
    productDetailsPage.addCurrentProductToCart();
    productsList.goToCartAfterAddingProduct();
    cartPage.verifyProductQuantityInCart();
  });

  it.only(`Given: user is on home page
    When: user navigates to Products page
    And: views a product and submits a review
    Then: success message confirming the review should be visible`, () => {
    cy.visit('');
    navbar.goTo('productsPage');
    productDetailsPage.visitAndVerifyProductDetailsPageLoaded(5);
    productDetailsPage.completeProductReviewForm(
      review.name,
      review.email,
      review.reviewDescription
    );
  });
});
