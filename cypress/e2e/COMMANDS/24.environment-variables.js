/// <reference types="cypress" />

describe("Access environment variables from config file", () => {

    before(function () {
        cy.fixture('userDetails').as('user').then(function (user) {
            globalThis.user = user;
        })
    })

    it("should be able to access environment variables from config file", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        cy.get('[name="first_name"]').type(Cypress.env("first_name"));
        cy.get('[name="last_name"]').type(Cypress.env("last_name"));
        cy.get('[name="email"]').type(Cypress.env("email"));

        cy.get('textarea.feedback-input').type('comments');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Thank You for your Message!');
    })
})

//command to run from CLI
//npx cypress run --browser chrome --headed --spec cypress/e2e/COMMANDS/24.environment-variables.js --env first_name=Tim,last_name=Wayne,email=wayne@gmail.com