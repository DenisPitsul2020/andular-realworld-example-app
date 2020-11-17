/// <reference types="cypress"/>

import {registrationPage} from "../support/page_objects/registrationPage";
import {homePage} from "../support/page_objects/homePage";

describe('Registration suite', () => {

  let user = {}

  before(() => {
    cy.fixture('userToRegister').then(userToRegister => {
      user = userToRegister;
    });
  });

  beforeEach(() => {
    cy.openHomePage();
  });

  it('should not be registered with username which already taken', () => {
    homePage.navigateToRegistrationPage()
    registrationPage.typeUserName(user.userName)
      .typeEmail(user.email)
      .typePassword(user.password)
      .submitRegistration()
    registrationPage.getFirstErrorMessage().should('to.contain', 'username has already been taken')
  })

})
