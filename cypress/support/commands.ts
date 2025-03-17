/// <reference types="cypress" />

import users from "../fixtures/users.json";

Cypress.Commands.add("login", (email?: string, password?: string) => {
  cy.get('input[name="email"]').type(email || users.simpleLoginUser.email);
  cy.get('input[name="password"]').type(password || users.simpleLoginUser.password);
  cy.get('button[type="submit"]').click();
});
