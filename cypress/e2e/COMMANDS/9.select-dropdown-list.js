/// <reference types="Cypress" />

describe("Interact with dropdown lists", () => {

    it("Select specific values via select dropdown list", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#dropdowm-menu-1').select('python').should('have.value', 'python'); // based on value
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG'); // based on text
    })

})
