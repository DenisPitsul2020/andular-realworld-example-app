/// <reference types="cypress"/>

import {homePage} from "../support/page_objects/homePage";
import {loginPage} from "../support/page_objects/loginPage";
import {creationArticlePage} from "../support/page_objects/creationArticlePage";
import {articleDetailPage} from "../support/page_objects/articleDetailPage";

describe('Article suite', () => {

  let user = {}
  let article = {}

  before(() => {
    cy.fixture('registeredUser').then(registeredUser => {
      user = registeredUser;
    });
    cy.fixture('article').then(articleParameter => {
      article = articleParameter;
    });
  });

  beforeEach(() => {
    cy.openHomePage();
  });

  it('should create a new article', () => {
    homePage.navigateToLoginPage()
    loginPage.typeEmail(user.email)
      .typePassword(user.password)
      .submitLogin()
    homePage.navigateToCreationArticlePage()
    creationArticlePage.typeTitle(article.title)
      .typeDescription(article.description)
      .typeBody(article.body)
      .submitCreation()
    articleDetailPage.getTitle().should('to.contain', article.title)
    articleDetailPage.getBody().should('to.contain', article.body)
    articleDetailPage.navigateToHomePage()
    homePage.clickGlobalFeed()
    homePage.getTitleByIndex(1).should('to.contain', article.title)
    homePage.getDescriptionByIndex(1).should('to.contain', article.description)

  })

  it('should article have correct title and description by index', () => {
    homePage.clickGlobalFeed()
    homePage.getTitleByIndex(137).should('to.contain', article.existingTitle)
    homePage.getDescriptionByIndex(137).should('to.contain', article.existingDescription)
  })

})
