/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    login(email?: string, password?: string, name?: string): Chainable<void>;
    logout(): Chainable<void>;
    goToLoginPage(): Chainable<void>;
    tryLoginWithInvalidUser(email: string, password: string): Chainable<void>;
  }
}