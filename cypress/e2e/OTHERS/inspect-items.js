/// <reference types="Cypress" />

describe("Inspect automation tests store items using chain of commands", () => {

    it("click on the first item using item header", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click();

    })

    it.only("click on the first item using item text", () => {
        cy.visit("https://www.automationteststore.com/");

        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').then(function (itemHeaderText) {
            console.log('Selected the following item:', itemHeaderText.text());
        });

        // Separate the click action
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
    });

    it("click on the first item using item index", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click();

    })

})
