import homePage from "../pages/home-page";
import testCases from "../pages/test-cases-page";

describe('Verify Test Cases Page', () => {
  it(`Given the user is on the home page 
      When the user navigates to the Test Cases page
      Then the Test Cases page should be visible`, () => {
    cy.visit("");
    homePage.verifyHomePageLoaded();
    cy.goTo("testCasesPage");
    testCases.visitAndVerifyTestCasesPageLoaded();
})
})