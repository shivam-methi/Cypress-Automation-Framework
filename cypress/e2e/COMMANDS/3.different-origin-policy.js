/// <reference types="cypress" />

describe("Cypress web security", () => {
    xit("Validate visiting two different domains", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.visit('https://www.google.com');
    });

    xit("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/');
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    });

    it('Origin command', () => {
        cy.origin('webdriveruniversity.com', () => {
            cy.visit("/");
        })

        cy.origin('google.com', () => {
            cy.visit("/");
        })

        //Same Origin Example:
        // cy.visit("https://www.webdriveruniversity.com");
        // cy.visit("https://selectors.webdriveruniversity.com");
    });
})