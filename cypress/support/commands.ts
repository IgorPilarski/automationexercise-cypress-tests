/// <reference types="cypress" />

import users from "../fixtures/users.json";

Cypress.Commands.add("login", (email?: string, password?: string, name?: string) => {
  cy.get('input[data-qa="login-email"]').type(email || users.simpleLoginUser.email);
  cy.get('input[data-qa="login-password"]').type(password || users.simpleLoginUser.password);
  cy.get('button[type="submit"]').contains('Login').click();
  cy.contains("li", "Logged in as").should("contain", name || users.simpleLoginUser.name);
})

Cypress.Commands.add("logout", () => {
  cy.get('li').contains('li', 'Logout').click()
  cy.get('li').contains('Login').should('exist')
})

Cypress.Commands.add("goToLoginPage", () => {
  cy.get('li').contains('Login').click()
  cy.get('h2').should('contain','Login to your account')
})

Cypress.Commands.add("tryLoginWithInvalidUser", (email: string, password: string) => {
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[type="submit"]').contains('Login').click();
  cy.get('p[style="color: red;"]').should('contain','Your email or password is incorrect!')
  cy.get('li').contains('Login').should('exist')

})
