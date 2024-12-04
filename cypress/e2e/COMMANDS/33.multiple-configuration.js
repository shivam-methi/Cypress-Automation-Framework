describe('Environment-specific tests', () => {

    it('should visit the correct environment baseUrl', () => {
        // Navigate to the base URL
        cy.visit(Cypress.env('baseUrl'));
    });
});
