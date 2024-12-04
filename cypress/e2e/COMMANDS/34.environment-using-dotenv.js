describe('Environment Configuration Tests', () => {

    it('Visits the Base URL', () => {
        // Navigate to the base URL
        cy.visit(Cypress.config('baseUrl'));

        // Assert that the base URL is correctly set
        cy.url().should('include', Cypress.config('baseUrl'));
    });

    it('Logs Environment Variables', () => {
        // Log all environment variables
        cy.log(`Base URL: ${Cypress.config('baseUrl')}`);
        cy.log(`QA URL: ${Cypress.env('QA_BASE_URL')}`);
        cy.log(`STAGING URL: ${Cypress.env('STAGING_BASE_URL')}`);
        cy.log(`PROD URL: ${Cypress.env('PROD_BASE_URL')}`);
        cy.log(`Environment: ${Cypress.env('ENV')}`);
        cy.wait(60000);
    });
});
