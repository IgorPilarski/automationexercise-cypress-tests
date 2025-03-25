import footer from '../components/footer-component';
import navbar from '../components/navbar-component';
import homePage from '../pages/home-page';

describe('Verify Subscription in home page', () => {
  it(`Given: user is on home page
      When: user scrolls down to the footer 
      And: subscribes with an email
      Then: the success message 'You have been successfully subscribed!' should be visible`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    footer.subscribeAndVerify();
  });
  it(`Given: user is on Cart page
      When: user scrolls down to the footer 
      And: subscribes with an email
      Then: the success message 'You have been successfully subscribed!'  should be visible`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    navbar.goTo('cartPage');
    footer.subscribeAndVerify();
  });
});
