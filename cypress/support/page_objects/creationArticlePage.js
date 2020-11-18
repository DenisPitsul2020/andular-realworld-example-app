
export class CreationArticlePage {

  typeTitle(title) {
    cy.get('input[formcontrolname="title"]').type(title)
    return this
  }

  typeDescription(description) {
    cy.get('input[formcontrolname="description"]').type(description)
    return this
  }

  typeBody(body) {
    cy.get('textarea[formcontrolname="body"]').type(body)
    return this
  }

  submitCreation() {
    cy.get('form button[type="button"]').click();
  }

}

export const creationArticlePage = new CreationArticlePage()
