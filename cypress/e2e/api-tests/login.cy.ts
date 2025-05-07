import users from '../../fixtures/usersData.json';

describe('Login API', () => {
  it(`Given: API is available
      When: user sends a POST request to verify login endpoint with valid credentials
      Then: response code should be 200 
      And: success message should be returned`, () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/verifyLogin',
      form: true,
      body: {
        email: users.simpleLoginUser.email,
        password: users.simpleLoginUser.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;
      const body = JSON.parse(response.body);
      expect(body.message).to.eq('User exists!');
    });
  });
  it(`Given: API is available
      When: user sends a POST request to verify login endpoint without email parameter
      Then: response code should be 400  
      And: an error message should be returned`, () => {});
  it(`Given: API is available
      When: user sends a DELETE request to verify login endpoint
      Then: response code should be 405  
      And: an error message should be returned`, () => {});
  it(`Given: API is available
      When: user sends a POST request to verify login endpoint with invalid credentials
      Then: response code should be 404  
      And: error message "User not found" should be returned`, () => {});
});
