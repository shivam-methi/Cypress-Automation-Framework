/// <reference types="cypress" />

describe("Test the debugging", () => {

    it("should be able to debug using debugger", () => {
        //does not pause the execution until open the inspect tool
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        cy.get('[name="first_name"]').type('John').then(() => {
            // eslint-disable-next-line
            debugger;
        });
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('doe@gmail.com');
    })

    it("should be able to debug using debug", () => {
        //does not pause the execution until open the inspect tool 
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        cy.get('[name="first_name"]').type('John').debug();
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('doe@gmail.com');
    });

    it("should be able to debug using pause", () => {
        //pause the execution without opening the inspect tool 
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        cy.get('[name="first_name"]').type('John').pause();
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('doe@gmail.com');
    });

    it.only("should be able to debug using wait", () => {
        //pause the execution until specified time 
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        // eslint-disable-next-line
        cy.get('[name="first_name"]').type('John').wait(10000);
        cy.get('[name="last_name"]').type('Doe');
        cy.get('[name="email"]').type('doe@gmail.com');
    });
});
