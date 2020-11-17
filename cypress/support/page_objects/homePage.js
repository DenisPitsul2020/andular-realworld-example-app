
export class HomePage {

  navigateToRegistrationPage() {
    cy.get('a[routerlink="/register"]').click()
  }

}

export const homePage = new HomePage()

