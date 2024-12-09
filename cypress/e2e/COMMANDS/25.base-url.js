/// <reference types="cypress" />

describe("Access base url from config file", () => {

    it("Should access the base url from config file", () => {
        cy.visit("/");
    })

    it("Should access the base url from config file and navigate to user login page", () => {
        cy.visit("/" + "Login-Portal/index.html");
    })

    it("Should access the base url from config file and custom commands file", () => {
        cy.navigateTo();
    })
})

//command to run from CLI
//npx cypress run --browser chrome --headed --spec cypress/e2e/COMMANDS/25.base-url.js --config baseUrl=https://www.automationteststore.com
