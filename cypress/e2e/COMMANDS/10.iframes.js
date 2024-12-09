/// <reference types="Cypress" />

describe("Handling iFrame & models", () => {

    it("Handle webdriver iFrame & models", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#iframe').invoke('removeAttr', 'target').click({ force: true });
       
        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body');
            cy.wrap(body).as('iframe');
        })

        cy.get('@iframe').find('#button-find-out-more').click();
        cy.get('@iframe').find('#myModal').as('model');
        cy.get('@model').should(($expectedText) => {
            const text = $expectedText.text();
            expect(text).to.include('Welcome to webdriveruniversity.com');
        })
        cy.get('@model').contains('Close').click();

    })
})
