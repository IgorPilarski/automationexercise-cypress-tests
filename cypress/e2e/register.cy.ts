describe('Simple register tests', () => {
  it.only(`Given the user attempts to register
      When trying to register
      Then the user should be successfully registered  
      AND the new user should be able delete his account`, () => {
    cy.visit("");
    cy.goToLoginPage()
    cy.registerRandomUser();

})
  it(`Given
      When
      Then`, () => {
      cy.visit("");
      cy.goToLoginPage();
    })
})
