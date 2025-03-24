class TestCases {
    visitAndVerifyTestCasesPageLoaded(): void {
        cy.url().should('eq', 'https://automationexercise.com/test_cases')
        cy.get('h2.title.text-center').should("contain","Test Cases");
        cy.get('section#form').should('be.visible')
    }

  }

  
  const testCases = new TestCases();
  export default testCases;