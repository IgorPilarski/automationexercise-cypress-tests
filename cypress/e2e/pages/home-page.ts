class HomePage {
    verifyHomePageLoaded(): void {
      cy.get('.logo img').should('be.visible');
      cy.title().should('eq', 'Automation Exercise');
      cy.get('#slider').should('be.visible');
      cy.get('div#slider-carousel').should('be.visible');
      cy.get('.nav a[href="/"]').should('be.visible');
      cy.url().should('eq', 'https://automationexercise.com/');
    }
    deleteCurrentUser(): void {
    cy.get('i.fa.fa-trash-o').click()
    cy.get('h2').contains("Account Deleted!").should('be.visible');
    cy.get('a[data-qa="continue-button"]').click()
    }
  }

  
  const homePage = new HomePage();
  export default homePage;