/// <reference types="cypress" />

describe("Capture Screenshot", () => {

    //screenshots will only work with 'cypress run' command using CLI
    // this test is suppose to get fail - to capture sceeenshots 

    it("Capture Screenshot on failure", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        cy.get('[name="first_name"]').type('user.first_name');
        cy.get('[name="last_name"]').type('user.last_name');
        cy.get('[name="email"]').type('user.email@gamil.com');

        cy.get('textarea.feedback-input').type('comments');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Thank You for your Message!!');
    })

    it("Capture Screenshot even on success", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        cy.get('[name="first_name"]').type('user.first_name');
        cy.get('[name="last_name"]').type('user.last_name');
        cy.get('[name="email"]').type('user.email@gamil.com');
        cy.screenshot();

        cy.get('textarea.feedback-input').type('comments');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Thank You for your Message!');
        cy.screenshot('success');
    })
})
