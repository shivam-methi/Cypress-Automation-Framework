/// <reference types="cypress" />

describe('Validate Category Selection', () => {
    it('Selects the Books category and validates it', () => {
        // Visit the given URL
        cy.visit('https://demowebshop.tricentis.com');

        cy.get('div.block-category-navigation div.listbox ul.list li.inactive a').each(($el) => {
            cy.log($el.text());
            if ($el.text().includes('Gift Cards')) {
                cy.wrap($el).click();
                
                // Validate the URL to confirm the category is selected
                cy.url().should('include', '/gift-cards');
            }

        });
    });
});
