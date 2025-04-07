import users from '../../fixtures/usersData.json';

class Footer {
  subscribeAndVerify(email?: string): void {
    cy.get('input#susbscribe_email').type(email || users.simpleLoginUser.email);
    cy.get('i.fa.fa-arrow-circle-o-right').click();
    cy.get('div.col-md-9.form-group')
      .not('.hide')
      .should('be.visible')
      .should('contain', 'You have been successfully subscribed!');
  }
  verifySubscriptionSection(): void {
    cy.get('h2').contains('Subscription').should('be.visible');
  }
  scrollToBottom(): void {
    cy.scrollTo('bottom');
  }
  clickUpArrow(): void {
    cy.get('i.fa.fa-angle-up').click();
  }
}

const footer = new Footer();
export default footer;
