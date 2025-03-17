import { use } from "chai";
import users from "../fixtures/users.json";

describe('Login tests for simpleLoginUser', () => {
  it(`Given a registered user;
      When they enter valid credentials
      Then they should be logged in successfully`, () => {
    cy.visit("");
    cy.goToLoginPage()
    cy.login()
    cy.logout()
})
  it.only(`Given a non existing;
      When they enter any credentials
      Then they should not be logged in`, () => {
      cy.visit("");
      cy.goToLoginPage()
      cy.tryLoginWithInvalidUser(users.notExistingUser.email, users.notExistingUser.password)
    })
})
