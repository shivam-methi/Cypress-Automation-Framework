/// <reference types="Cypress" />

describe("Handle JS Alerts", () => {

    it("Confirm js alert contains the correct text", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#button1').click();

        cy.on('window:alert', (str) =>{
            expect(str).to.equal('I am an alert box!');
        })
    
    })
})
