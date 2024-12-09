/// <reference types="cypress" />

describe('Create Booking', () => {
    var bookingId;

    it('Validate status code of the Booker API', () => {
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
            expect(response.status).to.equal(200);
        })
    });

    it('validate first name of latest post', () => {
        cy.request({
            method: 'GET',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                accept: 'application/json'
            }
        }).then(response => {
            let body = JSON.parse(JSON.stringify(response.body));
            cy.log(body.firstname);
            expect(body.firstname).to.equal('Jim');
            expect(body.lastname).to.equal('Brown');
        })
    });
});
