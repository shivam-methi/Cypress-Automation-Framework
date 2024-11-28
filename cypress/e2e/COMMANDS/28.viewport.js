/// <reference types="cypress" />

describe("Setup Viewport", () => {

    before(function () {
        cy.viewport(550, 750);
    })

    it("Check the setup Viewport", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    })
})
