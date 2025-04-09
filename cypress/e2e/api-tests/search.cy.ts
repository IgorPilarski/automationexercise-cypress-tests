describe('Search API', () => {
  it(`Given: API is available
      When: user sends a POST request to search product endpoint with valid search parameter
      Then: response code should be 200 
      And: matching products should be listed`, () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      form: true,
      body: {
        search_product: 'jeans',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.empty;

      const body = JSON.parse(response.body);
      expect(body).to.have.property('products');
      body.products.forEach((product: { name: string }) => {
        expect(product.name.toLowerCase()).to.include('jeans');
      });
    });
  });
  it(`Given: API is available
    When: user sends a POST request to search product endpoint without search parameter
    Then: response code should be 400 
    And: an error message should be returned`, () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
    }).then((response) => {});
  });
});
