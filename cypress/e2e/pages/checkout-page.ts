import users from '../../fixtures/usersData.json'

class CheckoutPage {
    goToLoginFromCheckout(): void {
        cy.get('p.text-center a[href*="/login"').click()
    }
    verifyUserDetailsInCheckout(selectedUser: string):void{
        cy.get('li.address_firstname.address_lastname').should("contain", users.randomEmailUser.firstName)
        cy.get('li.address_firstname.address_lastname').should("contain", users.randomEmailUser.lastName)
        cy.get('li.address_address1.address_address2').should("contain", users.randomEmailUser.address)
        cy.get('').should("contain", users.randomEmailUser.city)
      }
}
  
  const checkoutPage = new CheckoutPage();
  export default checkoutPage;




