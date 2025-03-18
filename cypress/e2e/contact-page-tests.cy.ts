describe('Contact Us Form tests', () => {
  it(`Given the contact us form page
      When the user fills out and submits the form 
      Then the form should be successfully submitted  
      AND clicking the Home button, the user should be redirected to the homepage  `, () => {
    cy.visit("");
    cy.verifyHomePageLoaded()
    cy.goTo("contactPage");

})

})