
describe('Flight Booking', () => {

    before('Clean local/session storage and cookies', () => {
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();
        cy.clearCookies();
    });


    it('Book a flight from Delhi to Bangalore', { scrollBehavior: false }, () => {

        cy.visit('https://www.makemytrip.com/', {
            headers: {
                "Accept-Encoding": "gzip, deflate, br",
                'Cache-Control': 'no-cache'
            }
        });

        const closeBtn = '//span[@class="commonModal__close"]';
        cy.xpath(closeBtn).then(($element) => {
            if ($element.length > 0) {
                cy.wrap($element).click();
            } else {
                cy.log('close button is not found');
            }
        });

        cy.xpath('//div[contains(@class,"makeFlex")]/ul/li[@data-cy="roundTrip"]').click({ scrollBehaviour: false });

        cy.xpath('//label/input[@id="fromCity"]').click();
        cy.xpath('//input[@type="text" and @placeholder="From"]').type('Delhi');
        cy.xpath('//span[contains(@class,"makeFlex flexOne")]').first().click();

        cy.xpath('//label/input[@id="toCity"]').click();
        cy.xpath('//input[@type="text" and @placeholder="To"]').type('Bengaluru');
        cy.xpath('//span[contains(@class,"makeFlex flexOne")]').first().click();


        var departureDate = new Date();
        departureDate.setDate(departureDate.getDate() + 0); 

        var departureYear = departureDate.getFullYear();
        var departureMonth = departureDate.toLocaleString("default", { month: "long" });
        var departureDay = departureDate.getDate();

        cy.log('departure year to select:', departureYear);
        cy.log('departure month to select:', departureMonth);
        cy.log('departure day to select:', departureDay);

        cy.scrollTo('topRight');
        function selectDepartureMonthAndYear() {
            cy.get('.DayPicker-Month').first().find('.DayPicker-Caption').first().then(currentDate => {
                if (!currentDate.text().includes(departureYear)) {
                    cy.xpath('//span[@aria-label="Next Month"]').click();
                    selectDepartureMonthAndYear();
                }
            }).then(() => {
                cy.get('.DayPicker-Month').first().find('.DayPicker-Caption').first().then(currentDate => {
                    if (!currentDate.text().includes(departureMonth)) {
                        cy.xpath('//span[@aria-label="Next Month"]').click();
                        selectDepartureMonthAndYear();
                    }
                })
            })
        }

        function selectDepartureDay() {
            cy.xpath('//div[contains(@class, "DayPicker-Day") and not(contains(@class, "DayPicker-Day--disabled")) and not(contains(@class, "DayPicker-Day--outside"))]')
                .contains(departureDay).first().click();
        }

        selectDepartureMonthAndYear();
        selectDepartureDay();


        var returnDate = new Date();
        returnDate.setDate(returnDate.getDate() + 1); 

        var returnYear = returnDate.getFullYear();
        var returnMonth = returnDate.toLocaleString("default", { month: "long" });
        var returnDay = returnDate.getDate();

        cy.log('return year to select:', returnYear);
        cy.log('return month to select:', returnMonth);
        cy.log('return day to select:', returnDay);

        cy.scrollTo('topRight');
        function selectReturnMonthAndYear() {
            cy.get('.DayPicker-Month').first().find('.DayPicker-Caption').first().then(currentDate => {
                if (!currentDate.text().includes(returnYear)) {
                    cy.xpath('//span[@aria-label="Next Month"]').click();
                    selectReturnMonthAndYear();
                }
            }).then(() => {
                cy.get('.DayPicker-Month').first().find('.DayPicker-Caption').first().then(currentDate => {
                    if (!currentDate.text().includes(returnMonth)) {
                        cy.xpath('//span[@aria-label="Next Month"]').click();
                        selectReturnMonthAndYear();
                    }
                })
            })
        }

        function selectReturnDay() {
            cy.xpath('//div[contains(@class, "DayPicker-Day") and not(contains(@class, "DayPicker-Day--disabled")) and not(contains(@class, "DayPicker-Day--outside"))]')
                .contains(returnDay).first().click();
        }

        selectReturnMonthAndYear();
        selectReturnDay();
    });
});


