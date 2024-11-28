/// <reference types="cypress" />

describe("Test Mouse Actions", () => {

    it("Should be able to perform a double mouse click", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#actions').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#double-click').dblclick();

    })
})