## What is Cypress::
1. Cypress is JavaScript-based end-to-end testing tool designed for modern web test automation.
2. Which is Built on Node.js with NPM package
3. Cypress can be Used for:
      Integration testing
      End to end testing
      Unit testing
4. Cypress makes asynchronous testing simple and convienent
5. Cypress is based on Mocha and Chai framework 
6. Cypress uses BDD/TDD assertion library
7. Cypress Supports multiple browser i.e Chrome, firefox and default browser Electron
8. Cypress Has 2 components:
      Test runner: UI showed on the browser when executing a test script.
      Dashboard: Shows various widgets and reports.


## Advantages/Disadvantages::

Advantages:
1. Easy to Install & Set Up Framework : less steps/dependencies to setup the framework
2. Automatic Wait: Automatically waits for the elements  
3. Next level Debugging: can check logs on every steps
4. Time Travelling: During the debug can go on any steps 
5. Fast: Does not require Web Driver as it interacts directly with browser
6. Reliable & Consistent: for modern web apps
7. Snapshots & video recording: Capture snapshots for failure steps , videos of entire suite
8. Mocking Server responses: provide ability to mock the server responses 

Disadvantages:
1. Supports only javascript/typescript
2. Supports only CSS locators by default and needs a plugin for xpath
3. Does not supports multiple tab functionality - navigates on the same page
4. Does not support multiple browsers at once functionality
5. Limited support for mobile testing


## Cypress Architecture::

1. node js is a runtime environment for javascript.
2. If we needs to run javascript on standalone machine or server we need a node js that helps to 
   execute the code on server or machine.
3. for ex: jdk/jrk is for java, similarly nodejs for javascript.

![alt text](<Cypress Architecture.png>)
![alt text](<Selenium Architecture.png>)

1. cypress is build over & runs on node js & it only supports javascript.
2. Most testing tools (like Selenium) operate by running outside of the browser.
3. However, Cypress engine directly operates inside the browser.
4. In other words, it is the browser that is executing your test code.
5. Cypress enables to listen and modify the browser behavior at run time by manipulating DOM.
6. It open doors to new kind of testing along with ultimate control over your application.
7. In Selenium - each of the browsers has provided their drivers, which interacts with the browser 
   instances for the execution of the commands.
8. In Cypress - all the commands executed within the browser.
9. Cypress’ architecture is mainly divided into 3 main components: Test Runner, Cypress Server, Browser.

![alt text](<Cypress Architectures.png>)

1. Firstly, the NodeJS server launches a browser with a proxy. 
2. Then, The browser is set up with two iframes: one for Cypress and another for the application 
   being tested. 
3. Since Cypress is in an iframe with the domain localhost, which is different from the application’s
   domain, so a script can be injected into the application’s iframe to change its domain to localhost. 
4. This enables the two iframes to communicate with each other, allowing Cypress to access all 
   the objects of the application, including the DOM, Window, and LocalStorage. 
5. Cypress and Node Js also communicate with each other to request OS privileges, 
   such as taking screenshots or recording videos. 
6. Finally, since the browser starts with a proxy, NodeJS can control the network layer, 
   capturing and modifying requests as needed.


## Automation Framework Structure::
1. Language: JavaScript
2. Automation testing tool: Cypress
3. Testing Approach: BDD/TDD
4. Framework/Assertion Library: Mocha & Chai

5. package.json: contains all the metadata relevant to the project used to manage project's dependencies.
6. node modules: contains all the relevant modules for the project
7. fixtures: use to store test data
8. integration/e2e: use to store test file/spec files
9. support: reusable methods are defined in this folder(i.e: page objects and step definition, utils)
	         commands.js: custom commands (i.e: WaitForElement())
	         e2e.js: loaded automatically before your test files. put global configuration 
                    and behavior that modifies Cypress (i.e: import cypress-xpath;)
10. cypress.config.js: it's a configuration file for entire framework, 
                       set all properties of the project on how projects will behave.
11. plugins: used to handle cypress events which are basically listeners, customizable browser. 
12. Reporting: Mochaawesome, cucumber html report
13. Screenshots: capture all the failures screen
14. Readme.md: contains all the required information about project 
               (i.e: setup & Installation commands, plugins)

15. dashboard: cypress dashboard shows various widgets and reports of the runs.
16. repository: github, for storing the code/repository   
17. ci/cd - jenkins, to build & deploy the code 


## Selenium vs Cypress::
| Feature                   | Selenium                               | Cypress                         |
| Setup Complexity          | challenging, download browser specific | simple, No dependencies         |
                            | drivers, setup test environment        |                                 |
| Languages Supported       | Java, Python, Ruby, C#, PHP            | JavaScript only                 |
| Browsers Supported        | Chrome, IE, Safari, Edge, Firefox      | Chrome, Edge, Firefox, Electron | 
| Frameworks Supported      | Supports multiple frameworks           | Supports only Mocha             | 
|                             Junit, TestNg, Cucumber                |                                 |  
| Documentation & Community | Well-established                       | intuitive and rapidly growing   |


## Cypress CLI::
1. It offers the capability for running the cypress tests in Command-Line
2. We can run Cypress from 'project root' using a command which depends on the package manager
   (i.e: npm, Yarn or pnpm). 
3. For example, you would prefix the command cypress run as: npx cypress run
4. Add any required options to the end of the command line. 
5. As an example, if you want to run tests in headless mode from a single spec file and record 
   the results with Cypress Cloud: npx cypress run --record --spec "cypress/e2e/my-spec.cy.js"
6. Cypress command strings can be saved as scripts for reuse.
7. For ex: we often need to run Cypress E2E tests in headed mode using the Chrome browser. 
   You can add the corresponding command to the scripts object in your package.json file.
  "scripts": {
    "e2e:chrome": "cypress run --browser chrome --headed"
  }
   cli command: npm run e2e:chrome
8. Examples: --browser, --config, --e2e, --env, --group, --headed, --parallel, --reporter, --spec, --tag


## Components of Cypress::
1. Test Runner: It tests in an interactive runner, which further helps by letting you see the command 
                and execute the same while viewing the application that is under the test.
2. App Preview: It helps in seeing the tests while executing the commands.
3. Test Status: It assists in displaying a summary of what tests are in Progress & have Failed or Passed.
4. Command Log: It showcases the command logs while executing the tests.
5. URL Preview: It displays the URL of the test and assists in tracking the entire URL Route.
6. Viewport Sizing: It helps in setting the app viewport size for testing varying layouts. 


## Hooks in Cypress::
1. Cypress hooks are generally used to set or define preconditions that we wish to execute. 
2. either before or after every tests or suite. 
3. hooks are:  
         beforeEach ( )
         before ( )
         afterEach( ) 
         after ( ) 


## Debugging in Cypress::
1. Using stack trace: view the detailed stack trace, print the stack trace to the browser console 
2. Using debugger: Cypress provides options to use the native debugger keyword in tests, 
                   put the debugger keyword where test execution should pause.
3. Using console logs: can print logs on the browser console and the Cypress window console
                       cy.log()  - for printing in the cypress window console
                       console.log() - for printing in the browser console
4. Using .debug() command: provides debugging information when Cypress hits the command. 
                           execution will stop only when the developer tools are open.
4. Using .pause() command: does not provide any debugging information, 
                           will stop test execution to inspect the web application, the DOM, the network

Difference between Cypress .pause() command and .debug() command:
| .pause()                                                | .debug()                                     |
| will stop test execution to inspect the web application |will stop only when developer tools are open. |
| does not provide any debugging information              |provide debugging information                 |
| stop execution & continue stepbystep using next option  | doesn’t provide this function                |


## Type of Waits::

Implicit Waits:
1. Implicit wait waits for an element to appear on the page.
2. Cypress automatically waits for commands and assertions to complete before moving on to the next step.
3. This means it will retry commands until they succeed or time out.

Explicit Waits:
1. Explicit waits are used to wait for a specific condition to be met before proceeding. 
2. Cypress provides several commands for explicit waiting:
      cy.wait() - This command pauses the execution for a specified amount of time.
      cy.get() with timeout - waits for an element to appear in the DOM for a specified timeout period.
      cy.intercept() with cy.wait() - command intercepts network requests and waits for them to complete.
      Assertions - can be used to wait for a specific state or condition to be true before proceeding.
                   cy.get('selector').should('be.visible');
      Cypress Commands Chaining -  cy.get('button').click().get('selector').should('be.visible');
                                   implicitly wait for conditions to be met before proceeding.


## Assertions in Cypress:: 
1. Assertions are essential for verifying that the application under test behaves as expected. 
2. They help ensure that various elements, states, and conditions in the application meet the criteria 
   defined in your test cases. 
3. Cypress provides a range of built-in/chai assertions that can be used directly or in combination with 
   other commands.
4. Examples: 
            cy.get('selector').should('exist');
            cy.get('selector').should('be.visible');
            cy.get('selector').should('have.text', 'Expected Text');
            cy.get('selector').should('contain', 'Expected Substring');
            cy.get('selector').should('have.attr', 'href', '/expected/path');
            cy.get('selector').should('have.class', 'active');
            cy.get('input').should('have.value', 'Expected Value');
            cy.get('selector').then($element => {
            expect($element).to.have.length(3); // Custom assertion using Chai});
5. all the assertions can be with 'not' as well.


## 