describe('Verify Subscription in home page', () => {
  it(`Given: user is on home page
      When: user scrolls down to the footer 
      And: subscribes with an email
      Then: the success message 'You have been successfully subscribed!' should be visible`, () => {
    cy.visit("");
    cy.verifyHomePageLoaded();
    cy.subscribeAndVerify();
})
it(`Given: user is on Cart page
    When: user scrolls down to the footer 
    And: subscribes with an email
    Then: the success message 'You have been successfully subscribed!' should be visible`, () => {
cy.visit("");
cy.verifyHomePageLoaded();
cy.goTo("cartPage");
cy.subscribeAndVerify();
})
})