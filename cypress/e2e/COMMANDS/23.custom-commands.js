/// <reference types="Cypress" />

xdescribe("Using Custom Commands", () => {

    it("Add specific product to basket using Custom Commands", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('a[href*="product/category&path"]').contains('Hair Care').click();

        cy.selectProduct('Eau Parfumee au The Vert Shampoo');

    })
})

xdescribe("Test Contact Us using fixtures & Custom Commands", () => {

    before(function () {
        cy.fixture('userDetails').as('user').then(function (user) {
            globalThis.user = user;
        })
    })

    it("should be able to submit a successful submission using fixtures & Custom Commands", () => {
        cy.visit("https://www.webdriveruniversity.com/");
        cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });

        cy.contactFormSubmission(user.first_name, user.last_name, user.email, 'commentss', 'body', 'Thank You for your Message!');
    })
})

describe("Add Products using fixtures & Custom Commands", () => {

    before(function () {
        cy.fixture('products').then(function (data) {
            globalThis.data = data;
        })
    })

    it("should be able to add products into basket using fixtures & Custom Commands", () => {
        cy.visit("https://www.automationteststore.com/");
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click();
        
        globalThis.data.productName.forEach(function(element){
            cy.addProductToBasket(element);
        })

    })
})
