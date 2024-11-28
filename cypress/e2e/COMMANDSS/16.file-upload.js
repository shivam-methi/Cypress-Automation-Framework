/// <reference types="Cypress" />

describe("File Upload", () => {

    xit("Upload a file", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#myFile').selectFile('cypress/fixtures/cypress-architecture.png');
        cy.get('#submit-button').click();

    })

    it("Upload no file", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#submit-button').click();
    })
})