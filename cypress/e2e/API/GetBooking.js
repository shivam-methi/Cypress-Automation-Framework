/// <reference types="cypress" />

describe('Get Booking', () => {
    var bookingId;
    var result;

    before(() => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {
                "firstname": "Jim",
                "lastname": "Brown",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            },
            headers: {
                accept: 'application/json'
            },
        }).then(response => {
            bookingId = response.body.bookingid;
            cy.log(bookingId);
        })
    });

    it('Validate status code of the Booker API', () => {
        result = cy.request('https://restful-booker.herokuapp.com/booking');
        result.its('status').should('equal', 200);
    });

    it('Validate api contains the correct keys and values', () => {
        cy.request({
            method: 'GET',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                accept: 'application/json'
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            cy.log(body);

            expect(body).has.property('firstname', 'Jim');
            expect(body).has.property('lastname', 'Brown');
        })
    });
});
