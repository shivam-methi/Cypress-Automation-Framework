describe('Environment-specific tests', () => {

    it('should visit the correct environment baseUrl', () => {
        cy.visit(Cypress.env('baseUrl'));
    });
});
