/// <reference types="cypress" />

describe('Get Booking Ids', () => {
    var result;
    it('Validate status code of the Booker API', () => {
        result = cy.request('https://restful-booker.herokuapp.com/booking');
        result.its('status').should('equal', 200);
    });

    it('Validate api contains the correct keys and values', () => {
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/',
            headers: {
                accept: 'application/json'
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            cy.log(body);

            body.forEach(item => {
                expect(item).to.have.all.keys('bookingid');
            });
        })
    });
});
