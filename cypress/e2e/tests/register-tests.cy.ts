import users from '../../fixtures/usersData.json';
import navbar from '../components/navbar-component';
import homePage from '../pages/home-page';
import loginPage from '../pages/login-page';

describe('Simple register tests', () => {
  it(`Given: the user that attempts to register
      When: trying to register
      Then: the user should be successfully registered  
      AND: the new user should be able delete his account`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    navbar.goTo('loginPage');
    loginPage.registerRandomUser();
    navbar.deleteCurrentUser();
  });
  it(`Given the already registered user 
      When trying to register with its credentials
      Then they should not be registered`, () => {
    cy.visit('');
    homePage.verifyHomePageLoaded();
    navbar.goTo('loginPage');
    loginPage.tryToRegisterExistingUser(
      users.simpleLoginUser.firstName,
      users.simpleLoginUser.email
    );
  });
});
