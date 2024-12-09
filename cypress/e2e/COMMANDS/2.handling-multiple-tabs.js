/// <reference types="Cypress" />

describe("Handle multiple tabs", () => {

    it("Handle multiple tabs", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });

    })
})
