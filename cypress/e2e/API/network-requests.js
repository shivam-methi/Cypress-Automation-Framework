/// <reference types="cypress" />

describe('Network Requests', () => {
    let message = 'unable to find comment!'

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/network-requests');
    });

    it('Get Request', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://jsonplaceholder.cypress.io/comments/1',
        },
        {
            body: {
                postId: 1,
                id: 1,
                name: 'test',
                email: 'test@gmail.com',
                body: 'Hello World!'
            }
        }).as('getComment');

        cy.get('.network-btn').click();

        cy.wait('@getComment').its('response.statusCode').should('eq', 200);
    });

    it('Post Request', () => {
        cy.intercept({
            method: 'POST',
            url: 'https://jsonplaceholder.cypress.io/comments'
        }).as('postComment');

        cy.get('.network-post').click();

        cy.wait('@postComment').should(({ request, response }) => {
            console.log(request);

            expect(request.body).to.include('email');
            expect(request.headers).to.have.property('content-type');

            console.log(response);
            expect(response.body).to.have.property('name', 'Using POST in cy.intercept()');
        })
    });

    it('Put Request', () => {
        cy.intercept({
            method: 'PUT',
            url: 'https://jsonplaceholder.cypress.io/comments/1'
        },
        {
            statusCode: 404,
            body: { error: message },
            delay: 500
        }).as('putComment');

        cy.get('.network-put').click();

        cy.wait('@putComment');

        cy.get('.network-put-comment').should('contain', message);

    })
});
