import users from "../../fixtures/usersData.json";
import homePage from "../pages/home-page";
import loginPage from "../pages/login-page";

describe('Simple register tests', () => {
  it(`Given: the user that attempts to register
      When: trying to register
      Then: the user should be successfully registered  
      AND: the new user should be able delete his account`, () => {
    cy.visit("");
    homePage.verifyHomePageLoaded();
    cy.goTo("loginPage");
    loginPage.registerRandomUser();
    homePage.deleteCurrentUser()
})
  it(`Given the already registered user 
      When trying to register with its credentials
      Then they should not be registered`, () => {
      cy.visit("");
      homePage.verifyHomePageLoaded();
      cy.goTo("loginPage");
      loginPage.tryToRegisterExistingUser(users.simpleLoginUser.name, users.simpleLoginUser.email);
    })
})
