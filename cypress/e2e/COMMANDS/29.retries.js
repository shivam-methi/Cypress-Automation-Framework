/// <reference types="cypress" />

describe("Retries on failure", () => {

    // this test is suppose to get fail - to retries 

    it("Retries on failure", {
        retries: {
            runMode: 2,
            openMode: 2
        },
    }, () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        cy.get('[name="first_name"]').type('user.first_name');
        cy.get('[name="last_name"]').type('user.last_name');
        cy.get('[name="email"]').type('user.email@gamil.com');

        cy.get('textarea.feedback-input').type('comments');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Thank You for your Message!!');
    })
})
