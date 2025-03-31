class HomePage {
  verifyHomePageLoaded(): void {
    cy.get('.logo img').should('be.visible');
    cy.title().should('eq', 'Automation Exercise');
    cy.get('#slider').should('be.visible');
    cy.get('div#slider-carousel').should('be.visible');
    cy.get('.nav a[href="/"]').should('be.visible');
    cy.url().should('eq', 'https://automationexercise.com/');
  }
  scrollToAndVerifyRecommendedSection(): void {
    cy.get('.recommended_items').scrollIntoView().should('be.visible');
    cy.get('div.recommended_items h2.title.text-center').should('contain', 'recommended items');
  }
}

const homePage = new HomePage();
export default homePage;
