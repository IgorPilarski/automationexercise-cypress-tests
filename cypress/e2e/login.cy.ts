

describe('Login tests for simpleLoginUser', () => {
  it('Given a registered user, When they enter valid credentials Then they should be logged in successfully', () => {
    cy.visit("https://automationexercise.com/");
    cy.get('i[class="fa fa-lock"]').click()
    cy.login()
})
})
