
class RegistrationPage {

  typeUserName(userName) {
    cy.get('[placeholder="Username"]').type(userName);
    return this;
  }

  typeEmail(email) {
    cy.get('[placeholder="Email"]').type(email);
    return this;
  }

  typePassword(password) {
    cy.get('[placeholder="Password"]').type(password);
    return this;
  }

  submitRegistration() {
    cy.get('form button[type="submit"]').click();
  }

  getFirstErrorMessage() {
    return cy.get('.error-messages').find('li').first();
  }

}

export const registrationPage = new RegistrationPage();
