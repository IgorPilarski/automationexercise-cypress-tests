import footer from '../components/footer-component';
import homePage from '../pages/home-page';

describe('Scroll functionalities tests', () => {
  it(`Given: user is on home page
      When: user scrolls down to the bottom of the page
      And: clicks on the upward arrow button
      Then: page should scroll up 
      And: the correct text should be visible at the top`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    footer.scrollToBottom();
    footer.verifySubscriptionSection();
    footer.clickUpArrow();
    homePage.verifyCarouselText();
  });
  it(`Given: user is on home page
      When: user scrolls down to the bottom of the page
      And: scrolls back up manually
      Then: page should scroll up 
      And: the correct text should be visible at the top`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    footer.scrollToBottom();
    footer.verifySubscriptionSection();
    homePage.scrollToTheTop();
    homePage.verifyCarouselText();
  });
});
