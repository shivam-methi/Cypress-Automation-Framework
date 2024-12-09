/// <reference types="Cypress" />

describe("Verify variables,cypress commands & Jquery commands", () => {

    it("Navigating to specific product pages", () => {
        cy.visit("https://www.automationteststore.com/");

        // const Makeup = cy.get('a[href*="product/category&path"]').contains('Makeup');
        // Makeup.click();

        // const Skincare = cy.get('a[href*="product/category&path"]').contains('Skincare');
        // Skincare.click();

        //Recommended Approach
        // const Makeup = cy.get('a[href*="product/category&path"]').contains('Makeup').click();

        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("found header text:", headerText);
            expect(headerText).is.eq('Makeup');
        });

        //const Skincare = cy.get('a[href*="product/category&path"]').contains('Skincare').click();
    })

    it.only("Validate properties of the Contact Us page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact/");

        //uses cypress commands and chaining 
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name:');

        //JQuery Approach 
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name:');
           
            //Embedded commands (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
                cy.log(fnText)
            })
        
        })

    })

})
