/// <reference types="cypress" />

describe("Test Mouse Actions", () => {

    it("Should be able to drag and drop a draggable item", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#actions').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#draggable').trigger('mousedown', { which: 1 });
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
    })
})