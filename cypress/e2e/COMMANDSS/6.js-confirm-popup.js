/// <reference types="Cypress" />

describe("Handle JS Confirm Popup", () => {

    it("Validate Js Confirm alert box works correctly when clicking ok", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#button4').click();

        cy.on('window:confirm', (str) => {
            return true;  //click ok
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!');
    })

    it("Validate Js Confirm alert box works correctly when clicking cancel", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });
        cy.get('#button4').click();

        cy.on('window:confirm', (str) => {
            return false; //click cancel
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!');
    })

    it.only("Validate Js Confirm alert box using a stub", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({ force: true });

        const stub = cy.stub();
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!');
        }).then(() => {
            return true; //click Ok
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!');
        })

    })
})