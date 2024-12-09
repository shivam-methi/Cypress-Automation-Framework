import HomePage_PO from "../../../../support/TDD/pageObjects/webdriver-uni/Homepage_po";
import ContactUsPage_PO from "../../../../support/TDD/pageObjects/webdriver-uni/ContactUspage_po";

describe("Test Contact Us form via WebdriverUni", () => {
    Cypress.config('defaultCommandTimeout', 2000);

    const homePage_PO = new HomePage_PO();
    const contactUsPage_PO = new ContactUsPage_PO();

    before(function () {
        cy.fixture('userDetails').then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function () {

        homePage_PO.visitHomePage();
        homePage_PO.clickOn_ContactUs_Button();
    });

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
        cy.title().should("include", "WebDriver | Contact Us");
        cy.url().should("include", "contactus");

        contactUsPage_PO.contactFormSubmission(data.first_name, data.last_name, data.email,
            "How can I learn Cypress?", "h1", "Thank You for your Message!");
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {

        contactUsPage_PO.contactFormSubmission(data.first_name, data.last_name, " ",
            "How can I learn Cypress?", "body", "Error: Invalid email address");
    });
});