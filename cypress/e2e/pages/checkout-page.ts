import users from '../../fixtures/usersData.json'

class CheckoutPage {
    goToLoginFromCheckout(): void {
        cy.get('p.text-center a[href*="/login"').click()
    }
    verifyUserDetailsInCheckout(selectedUser: string):void{
        cy.get('h2.heading').contains("Address Details").should('exist')
        cy.get('li.address_firstname.address_lastname').eq(0).should("contain", users.randomEmailUser.firstName)
        cy.get('li.address_firstname.address_lastname').eq(0).should("contain", users.randomEmailUser.lastName)
        cy.get('li.address_address1.address_address2').eq(0).should("contain", users.randomEmailUser.company)
        cy.get('li.address_address1.address_address2').eq(1).should("contain", users.randomEmailUser.address)
        cy.get('li.address_city.address_state_name.address_postcode').eq(0).should("contain", users.randomEmailUser.zipCode)
        cy.get('li.address_country_name').eq(0).should("contain", users.randomEmailUser.country)
        cy.get('li.address_phone').eq(0).should("contain", users.randomEmailUser.mobileNumber)
      }
    verifyReviewYourOrder():void{
      cy.get('h2.heading').contains("Review Your Order").should('exist')
      cy.get('td.image').should('contain', 'Item');
      cy.get('td.description').should('contain', 'Description');
      cy.get('td.price').should('contain', 'Price');
      cy.get('td.quantity').should('contain', 'Quantity');
      cy.get('td.total').should('contain', 'Total');
    }
}
  
  const checkoutPage = new CheckoutPage();
  export default checkoutPage;




