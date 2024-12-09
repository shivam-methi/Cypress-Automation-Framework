/// <reference types="cypress" />

describe('Delete Booking', () => {
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

    it('should delete the booking details', () => {
        cy.request({
            method: 'DELETE',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            }
        }).then((response) => {
            // Assertions
            expect(response.status).to.eq(201); // Check if the response status is 201
        });
    });

    it('validate latest delete', () => {
        cy.request({
            method: 'GET',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                accept: 'application/json'
            },
            failOnStatusCode: false // Prevent Cypress from failing on 404 status
        }).then(response => {
            cy.log(response.status);
            expect(response.status).to.eq(404); // The booking should no longer exist
            expect(response.body).to.eq('Not Found'); // Optional: Verify the 'Not Found' message
        })
    });
});
