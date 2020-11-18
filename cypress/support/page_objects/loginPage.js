
export class LoginPage {

  typeEmail(email) {
    cy.get('input[placeholder="Email"]').type(email);
    return this;
  }

  typePassword(password) {
    cy.get('input[placeholder="Password"]').type(password);
    return this;
  }

  submitLogin() {
    cy.get('form button[type="submit"]').click();
  }

}

export const loginPage = new LoginPage()
