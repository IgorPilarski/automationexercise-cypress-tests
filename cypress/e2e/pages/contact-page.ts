import users from '../../fixtures/usersData.json';
import contactForm from '../../fixtures/contactFormData.json';

class ContactPage {
  completeAndConfirmFormSubmission(
    name?: string,
    email?: string,
    subject?: string,
    message?: string
  ): void {
    cy.get('h2').contains('Get In Touch').should('be.visible');
    cy.get('input[data-qa="name"]').type(name || users.simpleLoginUser.name);
    cy.get('input[data-qa="email"]').type(email || users.simpleLoginUser.email);
    cy.get('input[data-qa="subject"]').type(subject || contactForm.subject);
    cy.get('textarea[data-qa="message"]').type(message || contactForm.message);
    cy.get('input[type=file]').selectFile('cypress/fixtures/contactFormData.json');
    cy.get('input[data-qa="submit-button"]').contains('Submit').click();
    cy.get('div.status.alert.alert-success')
      .contains('Success! Your details have been submitted successfully.')
      .should('be.visible');
    cy.get('i.fa.fa-angle-double-left').click();
  }
}

const contactPage = new ContactPage();
export default contactPage;
