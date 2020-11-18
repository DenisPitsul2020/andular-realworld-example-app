
export class ArticleDetailPage {

  navigateToHomePage() {
    cy.contains('Home').click()
  }

  getTitle() {
    return cy.get('.banner').find('h1')
  }

  getBody() {
    return cy.get('.article-content').find('p')
  }

  typeComment() {
    cy.get('form textarea')
    return this
  }

  submitPostingComment() {
    cy.get('form button[type="submit"]').click();
  }

}

export const articleDetailPage = new ArticleDetailPage()
