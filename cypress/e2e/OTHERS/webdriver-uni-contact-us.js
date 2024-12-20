/// <reference types="cypress" />

describe("Test Contact Us via webdriverUni", () => {

    it("should be able to submit a successful submission", () => {
        // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        // cy.get('#contact-us').click({force: true});
        cy.get('[name="first_name"]').type('John');
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('Doe@blogs.com');
        cy.get('textarea.feedback-input').type('comments');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    })

    it("should not be able to submit a successful submission", () => {
        // cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
        cy.get('[name="first_name"]').type('John');
        cy.get('[name="last_name"]').type('Doe');
        cy.get('textarea.feedback-input').type('comments');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required');
    })
})
