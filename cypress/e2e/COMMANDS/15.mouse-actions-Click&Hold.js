/// <reference types="cypress" />

describe("Test Mouse Actions", () => {

    it("Should be able to hold down the left mouse button on a given element", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#actions').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
        })

    })
})