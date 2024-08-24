/// <reference types="Cypress" />
describe("Handling Data table", () => {
    beforeEach(() => {
        cy.visit("https://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
    });

    it("Calculate & Assert the total age of all users", () => {
        var userDetails = [];
        let num = 0;
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text();
        }).then(() => {
            var i;
            for (i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    num += Number(userDetails[i]);
                }
                // cy.log(userDetails[i]);
            }
            cy.log('Found total age:', num);
            expect(num).to.eq(322);
        })
    });

    it.only("Calculate & Assert the age of a given user based on the last name ", () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text();
            if (text.includes('Woods')) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then((age) => {
                    const userAge = age.text();
                    expect(userAge).to.equal('80');
                })
            }
        });
    });
});
