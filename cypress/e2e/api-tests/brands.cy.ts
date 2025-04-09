describe('Brands API', () => {
  it(`Given: API is available
      When: user sends a GET request to brands list endpoint
      Then: response code should be 200 
      And: all brands should be listed`, () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/productsList',
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  it(`Given: API is available
      When: user sends a PUT request to brands list endpoint
      Then: response code should be 405 
      And: an error message should be returned`, () => {
    cy.request({
      method: 'PUT',
      url: 'https://automationexercise.com/api/productsList',
    }).then((response) => {
      expect(response.status).to.eq(200);

      const body = JSON.parse(response.body);
      expect(body.responseCode).to.eq(405);
      expect(body.message).to.eq('This request method is not supported.');
    });
  });
});
