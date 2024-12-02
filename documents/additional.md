Cypress APIS:
cy.visit()
cy.get()
cy.type()
cy.wait()
cy.click()
cy.title()
cy.url()
cy.document() - yield the window document object
cy.log()
cy.go('back')
cy.reload()
cy.go('forward')
cy.on('window:alert')
cy.on('window:confirm')
cy.get().check()
cy.get().uncheck()
cy.get().scrollIntoView()
cy.get().trigger('mousedown'/'mousemove'/'mouseup')
cy.get().dblclick()
cy.get().selectFile('cypress/fixtures/cypress-architecture.png')
cy.fixture()
Cypress.Commands().add('functionName')
cy.screenshot()
cy.viewport(550, 750)
cy.clearCookies()
cy.clearLocalStorage()
Cypress.isBrowser('electron')

JQuery: 
text()
includes()

ASSERTIONS:
Chai:
.should('have.property', 'charset').and('eq', 'UTF-8')
.should('have.attr', 'name', 'email')
.should('include', 'WebDriver | Contact Us')
expect(headerText).is.eq('Makeup')
.should('have.length',4)
.should('have.text','Mock')
.should('be.checked')
.should('be.checked').and('have.value','option1')
.should('not.be.checked').and('have.value','option1')
.check().should('be.checked').and('have.value','option1')
.uncheck().should('not.be.checked').and('have.value','option1')
.its('length').should('be.gt', 5);
.find()					---------used for locating a particular element when there multiple element with same value.
.eq()                   ---------used for indexing when user needs to select a specfic element with specific element.
.contains('txt')        ---------used for search a particular txt
.each                   ---------used for iterating value over an array(looping)
.wrap                   ---------used for fulfilling promise
.then                   ---------used for fulfilling promise
cy.log()	            ---------used for printing text on cypress console
.as()                   ---------used for reusing locators as a variable
.select()               ---------used for selecting an option from a static dropdown
.select()               ---------used for selecting an option from a dyanamic dropdown
.invoke()               ---------used for showing/or executing jQuery commands
.origin                 ---------used when user changing to some other domain(webpage) usually while switching tabs.
.on()                   ---------used for handling popup/alerts like alert and confirm
.click(force:true)      ---------used for force clicking a invisible element
.pause()				---------used for pausing the automation at a specific step.
.debug()                ---------same as pause
.invoke('text').as('productThumbnail')

Special commands: 
1: with commands cypress will run headless
npm init
npm --v

npx cypress run : to run all the spec files headless
npx cypress run --record --spec "(path of the spec file with spec file name)"
cpress run --headed
cpress run --headed firefox/edge/chrome
//// <reference types="Cypress"/> ---this is for getting all the inbuild cypress functions aka INTELLISENSE

npx cypress run --spec cypress/e2e/Framework.cy.js --headed --browser chrome --env url="https://rahulshettyacademy.com"




Locators:
cy.get('css:visible').should('have.length',4)   						---Here visible keyword after forces cypress to view only the elements which are visible on screen(no hidden elements)
cy.get('css:visible').find('descendant CSS').should('have.length',4)    ---Here we are locating css of a child element using .find() where total elements are 4
cy.get("tr td:nth-child(2))                                             ---Here we are locating css from a table where almost all locators are same so we are using nth-child with indexing for accuracy and Used for tables only.
.next()                                                                 ---this command helps user to get css of immediate sibing locator, can be used with get() method only. Used for tables only.



NEED TO WORK ON::
keyboard keys 
~~screenshot~~
~~fixtures - data driven from external source~~
~~env files - default, create separate for diff env - QA, Staging~~
create custom commands 
~~page objects~~
~~retry~~
~~reports~~
~~config options~~
~~integration with git/jenkins~~
~~run with dashboard/cloud~~
~~pause/debug~~
api testing
parallel execution 
mocking
~~same origin policy~~
~~timeouts~~
~~dashboard~~
assertions
tags
~~bdd~~
~~file upload~~
~~iframe~~
cross browser testing
lint 
run travis ci on github
branch strategy 
CI strategy
env file
notification - integrate with email/slack


