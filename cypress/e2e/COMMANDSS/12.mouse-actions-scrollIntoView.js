/// <reference types="cypress" />

describe("Test Mouse Actions", () => {

    it("Scroll element into view", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({ force: true });
    })
})