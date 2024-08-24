/// <reference types="cypress" />

describe("Test Contact Us via Automation Test Store", () => {

    it("should be able to submit a successful submission", () => {
        cy.visit("https://www.automationteststore.com/");
        // cy.get('.info_links_footer > :nth-child(5) > a').click();
        cy.get('a[href$="contact"]').click().then(function (linkText) {
            cy.log('clicked on the link using text: ', linkText.text());
        })
        // cy.xpath('//a[contains(@href, "contact")]').click();
        cy.get('#ContactUsFrm_first_name').type('john');
        cy.get('#ContactUsFrm_email').type('john@blog.com');
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email');
        cy.get('#ContactUsFrm_enquiry').type('enquiry');
        cy.get('button[title="Submit"]').click();
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!');
        console.log('Test has completed!');
        cy.log('Test has completed!');


    })

})