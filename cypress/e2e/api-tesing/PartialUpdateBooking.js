/// <reference types="cypress" />

describe('Partial Update Booking', () => {
    var token;
    var bookingId;

    before(() => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                "username": "admin",
                "password": "password123"
            },
            headers: {
                accept: 'application/json'
            },
        }).then(response => {
            token = response.body.token;
            cy.log(token);
        })
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

    it('should partial update the booking details', () => {
        cy.request({
            method: 'PATCH',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            body: {
                "firstname": "Sam",
                "lastname": "Peter"
            }
        }).then((response) => {
            // Assertions
            expect(response.status).to.eq(200); // Check if the response status is 200
            expect(response.body.firstname).to.eq('Sam'); // Check if firstname is updated
            expect(response.body.lastname).to.eq('Peter'); // Check if lastname is updated
        });
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
            expect(body.firstname).to.equal('Sam');
            expect(body.lastname).to.equal('Peter');
        })
    });
});