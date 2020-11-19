
class LoginPage {

  login(email, password) {
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type(password);
    cy.get('form button[type="submit"]').click();
  }

}

export const loginPage = new LoginPage()
