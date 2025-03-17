

describe('Login tests for simpleLoginUser', () => {
  it('Given a registered user, When they enter valid credentials Then they should be logged in successfully', () => {
    cy.visit('https://demo.prestashop.com/');
  cy.intercept("GET", "https://understood-brick.demo.prestashop.com/en/module/productcomments/CommentGrade").as("poducts") 
  }
  );
});

