import users from '../../fixtures/usersData.json';
import { generateTestEmail } from '../../support/utils';

const email = generateTestEmail();
describe('Account API', () => {
  it(`Given: API is available
        When: user sends a POST request to create account endpoint with valid user details
        Then: response code should be 201 
        AND: success message should be returned`, () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      form: true,
      body: {
        name: users.randomEmailUser.firstName,
        email: email,
        password: users.randomEmailUser.password,
        title: 'Mr',
        birth_date: users.randomEmailUser.day,
        birth_month: users.randomEmailUser.month,
        birth_year: users.randomEmailUser.year,
        firstname: users.randomEmailUser.firstName,
        lastname: users.randomEmailUser.lastName,
        company: users.randomEmailUser.company,
        address1: users.randomEmailUser.address,
        address2: users.randomEmailUser.address2,
        country: users.randomEmailUser.country,
        zipcode: users.randomEmailUser.zipCode,
        state: users.randomEmailUser.firstName,
        city: users.randomEmailUser.city,
        mobile_number: users.randomEmailUser.mobileNumber,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;

      const body = JSON.parse(response.body);
      expect(body.responseCode).to.eq(201);
      expect(body.message).to.eq('User created!');
    });
  });
  it(`Given: API is available
        When: user sends a DELETE request to delete account endpoint with valid user credentials
        Then: response code should be 200 
        AND: success message should be returned`, () => {
    cy.request({
      method: 'DELETE',
      url: 'https://automationexercise.com/api/deleteAccount',
      form: true,
      body: {
        email: email,
        password: users.randomEmailUser.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;

      const body = JSON.parse(response.body);
      expect(body.responseCode).to.eq(200);
      expect(body.message).to.eq('Account deleted!');
    });
  });
  it(`Given: API is available
        When: user sends a PUT request to update account endpoint with updated user details
        Then: response code should be 200 
        AND: success message should be returned`, () => {});
  it(`Given: API is available
        When: user sends a GET request to get user detail by email endpoint with a valid email
        Then: response code should be 200 
        AND: user details should be returned`, () => {});
});
