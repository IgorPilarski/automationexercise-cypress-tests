
import users from "../../fixtures/usersData.json";

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
  }

  
  const loginPage = new LoginPage();
  export default loginPage;