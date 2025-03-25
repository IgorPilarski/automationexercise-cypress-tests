import orderDetails from '../../fixtures/orderDetailsData.json';

type userTypes = {
  firstName: string;
  lastName?: string;
  company?: string;
  address?: string;
  zipCode?: string;
  country?: string;
  mobileNumber?: string;
};

class CheckoutPage {
  goToLoginFromCheckout(): void {
    cy.get('p.text-center a[href*="/login"').click();
  }
  verifyUserDetailsInCheckout(user: userTypes): void {
    cy.get('h2.heading').contains('Address Details').should('exist');
    cy.get('li.address_firstname.address_lastname').eq(0).should('contain', user.firstName);
    cy.get('li.address_firstname.address_lastname').eq(0).should('contain', user.lastName);
    cy.get('li.address_address1.address_address2').eq(0).should('contain', user.company);
    cy.get('li.address_address1.address_address2').eq(1).should('contain', user.address);
    cy.get('li.address_city.address_state_name.address_postcode')
      .eq(0)
      .should('contain', user.zipCode);
    cy.get('li.address_country_name').eq(0).should('contain', user.country);
    cy.get('li.address_phone').eq(0).should('contain', user.mobileNumber);
  }
  verifyReviewYourOrder(): void {
    cy.get('h2.heading').contains('Review Your Order').should('exist');
    cy.get('td.image').should('contain', 'Item');
    cy.get('td.description').should('contain', 'Description');
    cy.get('td.price').should('contain', 'Price');
    cy.get('td.quantity').should('contain', 'Quantity');
    cy.get('td.total').should('contain', 'Total');
  }
  completeCheckout(): void {
    cy.get('textarea.form-control').type(orderDetails.comment);
    cy.get('a.btn.btn-default.check_out').click();
  }
  enterPaymentDetails(): void {
    cy.get('input[data-qa="name-on-card"]').type(orderDetails.cardName);
    cy.get('input[data-qa="card-number"]').type(orderDetails.cardNumber);
    cy.get('input[class="form-control card-cvc"]').type(orderDetails.cvc);
    cy.get('input[data-qa="expiry-month"]').type(orderDetails.expirationMonth);
    cy.get('input[data-qa="expiry-year"]').type(orderDetails.expirationYear);
  }
  confirmPaymentDetails(): void {
    cy.get('button[data-qa="pay-button"]').click();
  }
  verifyOrderCompleted(): void {
    cy.get('h2[data-qa="order-placed"]').should('contain.text', 'Order Placed!');
    cy.get('div p').contains('Congratulations! Your order has been confirmed!').should('exist');
    cy.get('a[data-qa="continue-button"]').click();
  }
}

const checkoutPage = new CheckoutPage();
export default checkoutPage;
