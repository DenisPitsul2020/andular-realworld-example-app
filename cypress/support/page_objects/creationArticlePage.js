
class CreationArticlePage {

  createNewArticle(title, description, body) {
    cy.get('input[formcontrolname="title"]').type(title)
    cy.get('input[formcontrolname="description"]').type(description)
    cy.get('textarea[formcontrolname="body"]').type(body)
    cy.get('form button[type="button"]').click();
  }

}

export const creationArticlePage = new CreationArticlePage()
