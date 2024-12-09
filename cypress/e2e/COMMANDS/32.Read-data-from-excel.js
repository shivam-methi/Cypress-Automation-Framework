import * as path from 'path';

describe('Testing Excel data', () => {

    const xlsxPath = './cypress/fixtures/excel/companies.xlsx';
    const jsonFileName = path.basename(xlsxPath).replace('.xlsx', '.json');

    before(() => {
        // Check if the file exists first
        cy.task('convertXlsxToJson', xlsxPath).then((jsonFilePath) => {
            if (!jsonFilePath) {
                throw new Error('File conversion failed or file not found');
            } else {
                cy.log(`Excel file converted to JSON at: ${jsonFilePath}`);
            }
        });
    });

    beforeEach(() => {
        cy.fixture(jsonFileName).as('CompaniesData');
    })

    it('Should verify the JSON file exists in fixtures', () => {
        const jsonFileName = 'companies.json';  // Adjust if needed

        // Verify that the JSON file has been created
        cy.readFile(`./cypress/fixtures/${jsonFileName}`).then((jsonData) => {
            expect(jsonData).to.exist;
            cy.log('JSON data:', JSON.stringify(jsonData));
        });
    });

    it('Verify if file includes data of 10 companies', () => {
        cy.get('@CompaniesData').should('have.length', 10);
    })

    it.only('Verify if company data contains non-empty values', () => {
        cy.get('@CompaniesData').then((companies) => {
            for (const company of companies) {
                expect(company['Company Name']).to.not.be.empty;
                expect(company['Product']).to.not.be.empty;
                expect(company['City']).to.not.be.empty;
                expect(company['Email']).to.not.be.empty;
            }
        })
    });

    it('Verify if each company data contains unique emails', () => {
        cy.get('@CompaniesData').then((companies) => {
            const emails = companies.map(company => company.Email);
            console.log(emails);
            const uniqueEmails = new Set(emails);

            expect(uniqueEmails.size).to.equal(emails.length);
        })
    })
});
