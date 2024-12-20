/// <reference types="Cypress" />

describe("Iterate over element", () => {

    it("Log info of all hair care products", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').each(($el, index) => {
            cy.log('Index: ' + index + " : " + $el.text())
        })
    })

    it("Add specific product to basket", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click();

        cy.get('.fixed_wrapper .prdocutname').each(($el) => {
            if ($el.text().includes('Curls to straight Shampoo')) {
                cy.wrap($el).click();
            }
        })
    })

})
