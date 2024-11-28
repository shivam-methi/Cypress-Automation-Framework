/// <reference types="cypress" />

describe("Test Specific Browser runs", () => {

    before(function () {
        cy.fixture('userDetails').as('user').then(function (user) {
            globalThis.user = user;
        })
    })

    it("should be able to run test in a specific browser", () => {
        if (Cypress.isBrowser('electron')) {
            cy.log('TEST RUNNING IN ELECTRON BROWSER!!');
        } else {

            cy.visit("https://www.webdriveruniversity.com/");
            cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

            cy.get('[name="first_name"]').type(user.first_name);
            cy.get('[name="last_name"]').type(user.last_name);
            cy.get('[name="email"]').type(user.email);

            cy.get('textarea.feedback-input').type('comments');
            cy.get('[type="submit"]').click();
            cy.get('body').contains('Thank You for your Message!');
        }
    })
})