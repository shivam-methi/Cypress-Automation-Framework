/// <reference types="Cypress" />

describe("File Upload", () => {

    it("Upload a file", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#myFile').selectFile('documents/Images/cypress-architecture.png');
        cy.get('#submit-button').click();

    })

    it("Upload no file", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#file-upload').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#submit-button').click();
    })
})
