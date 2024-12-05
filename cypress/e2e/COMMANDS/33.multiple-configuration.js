describe('Environment-specific tests', () => {

    // this test uses config files from the config folder to access the environments 
    // this test is suppose to get fail - until Second Configuration in cypress.config is uncommented 
    // and First Configuration is commented 

    it('should visit the correct environment baseUrl', () => {
        // Navigate to the base URL
        cy.visit(Cypress.env('baseUrl'));
    });
});
