/// <reference types="Cypress" />

describe("Handle Datepciker", () => {

    it("Select date from the datepicker", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#datepicker').invoke('removeAttr', 'target').click({ force: true });

        cy.get('#datepicker > input').click();

        var date = new Date();
        date.setDate(date.getDate() + 300); // get current day i.e. 21

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", { month: "long" });
        var futureDay = date.getDate();

        cy.log('Future year to select:', futureYear);
        cy.log('Future month to select:', futureMonth);
        cy.log('Future dat to select:', futureDay);

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click();
                    selectMonthAndYear();
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }

        selectMonthAndYear();
        selectFutureDay();
    })
})