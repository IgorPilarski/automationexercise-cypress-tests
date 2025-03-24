import users from "../../fixtures/usersData.json";
import navbar from "../components/navbar-component";
import homePage from "../pages/home-page";
import loginPage from "../pages/login-page";

describe('Simple login tests', () => {
  it(`Given: a registered user;
      When: they enter valid credentials
      Then: they should be logged in successfully
      And: they should be able to logout`, () => {
    cy.visit("");
    homePage.verifyHomePageLoaded();
    navbar.goTo("loginPage");
    loginPage.login()
    navbar.logout();
})
  it(`Given a non existing user
      When they enter invalid credentials
      Then they should not be logged in`, () => {
      cy.visit("");
      homePage.verifyHomePageLoaded();
      navbar.goTo("loginPage");
      loginPage.tryLoginWithInvalidUser(users.notExistingUser.email, users.notExistingUser.password);
    })
})
