/// <reference types="cypress" />

describe("Test the Timeouts", () => {
    // alter default command timeout for specific test
    Cypress.config('defaultCommandTimeout', 20000);

    it("should be able to debug using debugger", () => {
        //URL Timeouts
        cy.visit(("https://www.webdriveruniversity.com/"), { timeout: 10000 });

        //Command Timeouts 
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }, { timeout: 10000 });

        //Assertion Timeouts
        cy.get('[name="first_name"]').type('John').should('be.visible', { timeout: 10000 });
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('doe@gmail.com');
    })
});
