/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    goTo(page: string): Chainable<void>;
    verifyHomePageLoaded(): Chainable<void>;
    login(email?: string, password?: string, name?: string): Chainable<void>;
    logout(): Chainable<void>;
    tryLoginWithInvalidUser(email: string, password: string): Chainable<void>;
    registerRandomUser()
    tryToRegisterExistingUser(name: string, email: string): Chainable<void>;
    completeAndConfirmFormSubmission(name?: string, email?: string, subject?: string, message?: string): Chainable<void>;
  }
}