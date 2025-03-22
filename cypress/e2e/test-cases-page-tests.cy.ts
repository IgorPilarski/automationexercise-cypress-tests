describe('Verify Test Cases Page', () => {
  it(`Given the user is on the home page 
      When the user navigates to the Test Cases page
      Then the Test Cases page should be visible`, () => {
    cy.visit("");
    cy.verifyHomePageLoaded();
    cy.goTo("testCasesPage");
    cy.visitAndVerifyTestCasesPageLoaded();
})
})