
import users from "../../fixtures/usersData.json";
import { generateTestEmail } from '../../support/utils';

class LoginPage {
  login(email?: string, password?: string, name?: string): void {
    cy.get('h2').contains("Login to your account").should('be.visible');
    cy.get('input[data-qa="login-email"]').type(email || users.simpleLoginUser.email);
    cy.get('input[data-qa="login-password"]').type(password || users.simpleLoginUser.password);
    cy.get('button[type="submit"]').contains('Login').click();
    cy.contains("li", "Logged in as").should("contain", name || users.simpleLoginUser.name);
    }
  tryLoginWithInvalidUser(email: string, password: string): void{
    cy.get('h2').contains("Login to your account").should('be.visible');
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[type="submit"]').contains('Login').click();
    cy.get('p[style="color: red;"]').should('contain','Your email or password is incorrect!');
    cy.get('li').contains('Login').should('exist');
  }
  tryToRegisterExistingUser(name: string, email: string):void{
    cy.get('h2').contains("New User Signup!").should('be.visible');
    cy.get('input[data-qa="signup-name"').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[type="submit"]').contains('Signup').click(); 
    cy.get('p[style="color: red;"]').should('contain','Email Address already exist!');
  }
  registerRandomUser():void{
    const email = generateTestEmail();
    cy.get('h2').contains("New User Signup!").should('be.visible');
    cy.get('input[data-qa="signup-name"').type(users.randomEmailUser.firstName);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[type="submit"]').contains('Signup').click();
    cy.get('h2.title.text-center').contains('b', 'Enter Account Information').should('be.visible');
    cy.get('input#id_gender1').click();
    cy.get('input[type="password"]').type(users.randomEmailUser.password);
    cy.get('select[data-qa="days"]').select(users.randomEmailUser.day);
    cy.get('select[data-qa="months"]').select(users.randomEmailUser.month);
    cy.get('select[data-qa="years"]').select(users.randomEmailUser.year);
    cy.get('input[name="newsletter"]').click();
    cy.get('input[name="optin"]').click();
    cy.get('input[data-qa="first_name"]').type(users.randomEmailUser.firstName);
    cy.get('input[data-qa="last_name"]').type(users.randomEmailUser.lastName);
    cy.get('input[data-qa="company"]').type(users.randomEmailUser.company)
    cy.get('input[data-qa="address"]').type(users.randomEmailUser.address);
    cy.get('input[data-qa="address2"]').type(users.randomEmailUser.address2);
    cy.get('select[data-qa="country"]').select(users.randomEmailUser.country);
    cy.get('input[data-qa="state"]').type(users.randomEmailUser.state)
    cy.get('input[data-qa="city"]').type(users.randomEmailUser.city)
    cy.get('input[data-qa="zipcode"]').type(users.randomEmailUser.zipCode)
    cy.get('input[data-qa="mobile_number"]').type(users.randomEmailUser.mobileNumber)
    cy.get('button[data-qa="create-account"').click()
    cy.get('h2').contains("Account Created!").should('be.visible');
    cy.get('a[data-qa="continue-button"]').click()
    cy.contains("li", "Logged in as").should("contain", "test-user");
  }
  }

  
  const loginPage = new LoginPage();
  export default loginPage;