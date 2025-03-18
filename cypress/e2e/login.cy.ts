import users from "../fixtures/users.json";

describe('Simple login tests', () => {
  it(`Given a registered user;
      When they enter valid credentials
      Then they should be logged in successfully
      AND they should be able to logout`, () => {
    cy.visit("");
    cy.goToLoginPage()
    cy.login()
    cy.logout()
})
  it(`Given a non existing user
      When they enter invalid credentials
      Then they should not be logged in`, () => {
      cy.visit("");
      cy.goToLoginPage()
      cy.tryLoginWithInvalidUser(users.notExistingUser.email, users.notExistingUser.password)
    })
})
