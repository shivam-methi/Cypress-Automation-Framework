/// <reference types="cypress" />

describe('Update Booking', () => {
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

    it('should update the booking details', () => {
        cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`
            },
            body: {
                "firstname": "James",
                "lastname": "Black",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2018-01-01",
                    "checkout": "2019-01-01"
                },
                "additionalneeds": "Breakfast"
            }
        }).then((response) => {
            // Assertions
            expect(response.status).to.eq(200); // Check if the response status is 200
            expect(response.body.firstname).to.eq('James'); // Check if firstname is updated
            expect(response.body.lastname).to.eq('Black'); // Check if lastname is updated
            expect(response.body.totalprice).to.eq(111); // Check if totalprice is updated
            expect(response.body.depositpaid).to.be.true; // Check if depositpaid is true
            expect(response.body.bookingdates.checkin).to.eq('2018-01-01'); // Check if checkin date is updated
            expect(response.body.bookingdates.checkout).to.eq('2019-01-01'); // Check if checkout date is updated
            expect(response.body.additionalneeds).to.eq('Breakfast'); // Check if additionalneeds is updated
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
            expect(body.firstname).to.equal('James');
            expect(body.lastname).to.equal('Black');
        })
    });
});
