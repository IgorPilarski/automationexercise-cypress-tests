describe('Contact Us Form test', () => {
  it(`Given the Test Cases page
      When the user enters the Test Cases page 
      Then the page with the test cases should be visible`, () => {
    cy.visit("");
    cy.verifyHomePageLoaded();
    cy.goTo("testCasesPage");
    cy.verifyTestCaesPageLoaded();
})
})