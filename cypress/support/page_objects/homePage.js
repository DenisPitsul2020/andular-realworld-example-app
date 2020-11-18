
export class HomePage {

  navigateToLoginPage() {
    cy.get('a[routerlink="/login"]').click()
  }

  navigateToRegistrationPage() {
    cy.get('a[routerlink="/register"]').click()
  }

  navigateToCreationArticlePage() {
    cy.get('a[routerlink="/editor"]').click()
  }

  clickGlobalFeed() {
    cy.contains('a', 'Global Feed').click()
  }

  getTitleByIndex(index) {
    index--
    // if index < 10 then element should be on the page
    if (index < 10)
      return cy.get('app-article-list').find('app-article-preview').eq(index).find('h1')
    else {
      // There are 10 article on each page
      const page = index / 10
      // wait until pagination elements be visible
      cy.get('.pagination li a', { timeout: 10000 }).should('be.visible');
      cy.get('.pagination li').eq(Math.floor(page)).then(li => {
        // get class of pagination element
        cy.wrap(li).invoke('attr', 'class').then(classValue => {
          // Unless class does not have active value, click and go to the required page
          if (!classValue.includes('active'))
            cy.wrap(li).find('a').click()
        })
      })
      cy.wait(500)
      // return required article
      return cy.get('app-article-list').find('app-article-preview').eq(index % 10).find('h1')
    }
  }

  getDescriptionByIndex(index) {
    index--
    if (index < 10)
      return cy.get('app-article-list').find('app-article-preview').eq(index).find('p')
    else {
      const page = index / 10
      cy.get('.pagination li a', { timeout: 10000 }).should('be.visible');
      cy.get('.pagination li').eq(Math.floor(page)).then(li => {
        cy.wrap(li).invoke('attr', 'class').then(classValue => {
          if (!classValue.includes('active'))
            cy.wrap(li).find('a').click()
        })
      })
      cy.wait(500)
      return cy.get('app-article-list').find('app-article-preview').eq(index % 10).find('p')
    }
  }

}

export const homePage = new HomePage()

