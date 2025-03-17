/// <reference types="cypress" />

import users from "../fixtures/users.json";

Cypress.Commands.add("login", (email?: string, password?: string) => {
  cy.get('input[data-qa="login-email"]').type(email || users.simpleLoginUser.email);
  cy.get('input[data-qa="login-password"]').type(password || users.simpleLoginUser.password);
  cy.get('button[type="submit"]').contains('Login').click();
});
