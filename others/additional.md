## COMMANDS::
----------------------------------------------------------------------------------------------------------
## COMMANDS::

#### 1. Iteration of items: 
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
                if ($el.text().includes('Curls to straight Shampoo')) {
                    cy.wrap($el).click();
                }
----------------------------------------------------------------------------------------------------------

#### 2. Handling Multiple tabs - Remove target attribute:
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
----------------------------------------------------------------------------------------------------------

#### 3. Origin Policy: 
    cy.origin('webdriveruniversity.com', () => {
            cy.visit("/");
        })

        cy.origin('google.com', () => {
            cy.visit("/");
        })
----------------------------------------------------------------------------------------------------------

#### 4. Browser Navigations:
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true });
    cy.go('back');
    cy.reload();
    cy.go('forward');
----------------------------------------------------------------------------------------------------------

#### 5. Javascript Alert Popup: 
    cy.get('#button1').click();
    cy.on('window:alert', (str) =>{
    expect(str).to.equal('I am an alert box!');
    })
----------------------------------------------------------------------------------------------------------

#### 6. Javascript Confirm Popup: 

##### Select Ok/true -
```bash
    cy.get('#button4').click();
    cy.on('window:confirm', (str) => {
        return true;  
    })
    cy.get('#confirm-alert-text').contains('You pressed Ok!');
```

 ##### Select Cancel/false -
```bash
    cy.get('#button4').click();
    cy.on('window:confirm', (str) => {
        return false;  
    })
    cy.get('#confirm-alert-text').contains('You pressed Cancel!');
```
----------------------------------------------------------------------------------------------------------

#### 7. Handle Checkboxes: 

##### Check the checkbox -
```bash
    cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
    cy.get('@option-1').check().should('be.checked');
```
    
##### Uncheck the checkbox -
```bash
    cy.get(':nth-child(5) > input').as('option-3')
    cy.get('@option-3').uncheck().should('not.be.checked');    
```

##### Check the multiple checkbox -
```bash
    cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4'])
        .should('be.checked');
```
----------------------------------------------------------------------------------------------------------

#### 8. Handle Radio buttons:

##### no option is selected/disabled -
```bash
    cy.get('#radio-buttons').find('[type="radio"]').first().check();
    cy.get('#radio-buttons').find('[type="radio"]').eq(1).check();
```

##### options are already selected/disabled -
```bash
    cy.get('[value="lettuce"]').should('not.be.checked');
    cy.get('[value="cabbage"]').should('be.disabled');
    cy.get('[value="pumpkin"]').should('be.checked');

    cy.get('[value="lettuce"]').check().should('be.checked');
    cy.get('[value="pumpkin"]').should('not.be.checked');
```
----------------------------------------------------------------------------------------------------------

#### 9. Handle Dropdown lists: 

##### based on value tag -
```bash
    cy.get('#dropdowm-menu-1').select('python').should('have.value', 'python');
```
    
##### based on text -
```bash
    cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG');
``` 
----------------------------------------------------------------------------------------------------------

#### 10. Handle iFrames:
    cy.get('#frame').then($iframe => {
    const body = $iframe.contents().find('body');
    cy.wrap(body).as('iframe');
    })

    cy.get('@iframe').find('#button-find-out-more').click();
    cy.get('@iframe').find('#myModal').as('model');
    cy.get('@model').should(($expectedText) => {
    const text = $expectedText.text();
    expect(text).to.include('Welcome to webdriveruniversity.com');
    })
    cy.get('@model').contains('Close').click();
----------------------------------------------------------------------------------------------------------

#### 11. Autocomplete(Suggested) Lists:
    cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
        const prod = $el.text();
        const productToSelect = 'Avacado';

        if (prod === productToSelect) {
            $el.trigger('click');
            cy.get('#submit-button').click();
            cy.url().should('include', productToSelect);
            }
        })
----------------------------------------------------------------------------------------------------------

#### 12. Mouse Actions - ScrollIntoView:
    cy.get('#actions').scrollIntoView().click();
----------------------------------------------------------------------------------------------------------

#### 13. Mouse Actions - Drag & Drop: 
    cy.get('#draggable').trigger('mousedown', { which: 1 });
    cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });
----------------------------------------------------------------------------------------------------------

#### 14. Mouse Actions - Double Cilck: 
    cy.get('#double-click').dblclick();
----------------------------------------------------------------------------------------------------------

#### 15. Mouse Actions - Click & Hold: 
    cy.get('#click-box').trigger('mousedown', { which: 1 }).then(($element) => {
    expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
    })
----------------------------------------------------------------------------------------------------------

#### 16. File Upload: 
    cy.get('#myFile').selectFile('cypress/fixtures/cypress-architecture.png');
    cy.get('#submit-button').click();
----------------------------------------------------------------------------------------------------------

#### 17. Traversing Elements:

#####    children - 
```bash
    cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Contact Us');
```

#####    closest - 
```bash
    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group');
```

#####    eq - 
```bash
    cy.get('.traversal-drinks-list > *').eq(2).should('contain', 'Milk');
```

#####    filter - 
```bash
    cy.get('.btn-group-toggle > *').filter('.active').should('contain', 'Button-1');
```

#####    find - 
```bash
    cy.get('.traversal-pagination').find('li').find('a').should('have.length', 7);
```

#####    first - 
```bash
    cy.get('.traversal-table > tbody > tr > td').first().should('contain', 'Andy');
```

#####    last - 
```bash
    cy.get('.traversal-table > tbody > tr > td').last().should('contain', 'Scott');
```

#####    nextAll -
```bash 
    cy.get('.traversal-drinks-list').contains('Tea').nextAll().should('have.length', 3);
```

#####    nextUntil - 
```bash
    cy.get('#coffee').nextUntil('#milk');
```

#####    not - 
```bash
    cy.get('.traversal-button-states > button').not('.disabled').should('not.have.class', 'disabled');
```

#####    parent - 
```bash
    cy.get('.traversal-mark').parent().should('contain', 'Lorem ipsum dolor sit amet');
```

#####    parents - 
```bash
    cy.get('.traversal-cite').parents().should('match', 'blockquote');
```

#####    prev - 
```bash
    cy.get('#sugar').prev().contains('Espresso');
```

#####    prevAll - 
```bash
    cy.get('.sales').prevAll().should('have.length', 2);
```

#####    prevUntil - 
```bash
    cy.get('#veggie').prevUntil('#fruits').should('have.length', 5);
```

#####    siblings - 
```bash
    cy.get('.traversal-button-other-states .active').siblings().should('have.length', 3);
```
----------------------------------------------------------------------------------------------------------

#### 18. Handle Date picker: 
    cy.get('#datepicker > input').click();

    var date = new Date();
    date.setDate(date.getDate() + 300); // get current day i.e. 21

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });
    var futureDay = date.getDate();

    cy.log('Future year to select:', futureYear);
    cy.log('Future month to select:', futureMonth);
    cy.log('Future dat to select:', futureDay);

    function selectMonthAndYear() {
        cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
            if (!currentDate.text().includes(futureYear)) {
                cy.get('.next').first().click();
                selectMonthAndYear();
            }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click();
                        selectMonthAndYear();
                    }
                })
            })
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click();
        }

    selectMonthAndYear();
    selectFutureDay();
----------------------------------------------------------------------------------------------------------

#### 19. Handle Data table:
    var userDetails = [];
    let num = 0;
    cy.get('#thumbnail-1 td').each(($el, index, $list) => {
    userDetails[index] = $el.text();
        }).then(() => {
            var i;
            for (i = 0; i < userDetails.length; i++) {
                if (Number(userDetails[i])) {
                    num += Number(userDetails[i]);
                }
                // cy.log(userDetails[i]);
            }
            cy.log('Found total age:', num);
            expect(num).to.eq(322);
----------------------------------------------------------------------------------------------------------

#### 20. Alias invoke: 
    cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail');
    cy.get('@productThumbnail').its('length').should('be.gt', 5);
----------------------------------------------------------------------------------------------------------

#### 21. Hooks: 

##### before -
    before(() => {
    cy.log("runs once before all tests in the block");
    });


##### after -
    after(() => {
    cy.log("runs once after all tests in the block");
    });


##### beforeEach -
    beforeEach(() => {
    cy.log("runs before each test in the block");
    });


##### afterEach -
    afterEach(() => {
    cy.log("runs after each test in the block");
    });
----------------------------------------------------------------------------------------------------------

#### 22. Fixtures:

##### created a 'userDetails.json' file in fixtures folder -
    
    {
        "first_name": "John",
        "last_name": "Doe",
        "email": "john.doe@gmail.com"
    }


##### using the data into the test files -

     before(function () {
        cy.fixture('userDetails').as('user').then(function (user) {
            globalThis.user = user;
        })
    })

    cy.get('[name="first_name"]').type(user.first_name);
    cy.get('[name="last_name"]').type(user.last_name);
    cy.get('[name="email"]').type(user.email);
----------------------------------------------------------------------------------------------------------

#### 23. Custom Commands:
 
##### added functions in 'commands.js' file in support folder -

    Cypress.Commands.add('selectProduct', productName => {
    cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        if ($el.text().includes(productName)) {
            cy.wrap($el).click();
            }
        })
    })


##### using the commands into the test files -

    cy.selectProduct('Eau Parfumee au The Vert Shampoo');
----------------------------------------------------------------------------------------------------------

#### 24. Setup Environment variables:

##### add command in cypress.config.js file under e2e setup -
    
    env: {
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@gmail.com"
    }

##### using the commands into the test files -

    cy.get('[name="first_name"]').type(Cypress.env("first_name"));
    cy.get('[name="last_name"]').type(Cypress.env("last_name"));
    cy.get('[name="email"]').type(Cypress.env("email"));


##### command to run from CLI -

    npx cypress run --browser chrome --headed --spec cypress/e2e/COMMANDS/24.environment-variables.js --env first_name=Tim,last_name=Wayne,email=wayne@gmail.com
----------------------------------------------------------------------------------------------------------

#### 25. Setup Base URL: 

##### add command in cypress.config.js file under e2e setup - 

    baseUrl: "https://www.webdriveruniversity.com/",


##### using the commands into the test files -
        
    cy.visit("/");


##### command to run from CLI -

    npx cypress run --browser chrome --headed --spec cypress/e2e/COMMANDS/25.base-url.js --config baseUrl=https://www.automationteststore.com
----------------------------------------------------------------------------------------------------------

#### 26. Debugging:

#####  debugger  - 
###### does not pause the execution until open the inspect tool

    cy.get('[name="first_name"]').type('John').then(() => {
        debugger;
    });


#####  debug() - 
###### does not pause the execution until open the inspect tool

    cy.get('[name="first_name"]').type('John').debug();


##### pause() - 
###### pause the execution without opening the inspect tool

    cy.get('[name="first_name"]').type('John').pause();


#####  wait() - 
###### pause the execution until specified time 

    cy.get('[name="first_name"]').type('John').pause(10000);
----------------------------------------------------------------------------------------------------------

#### 27. Capture Screenshots & Videos:

##### Screenshots - 

##### add command in cypress.config.js file under e2e setup -
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,

###### screenshots will only work with 'cypress run' command using CLI
###### default folder 'cypress/screenshots'

##### add command in cypress.config.js file under e2e setup -    
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,

##### on failure - capture automatically 
    
##### on even success - 
    cy.screenshot('success');


##### Videos -

###### vidoes will only work with 'cypress run' command using CLI
###### default folder 'cypress/video'

##### add command in cypress.config.js file under e2e setup to stop to record -
    video: false
----------------------------------------------------------------------------------------------------------

#### 28. Setup Viewport: 

##### add command in cypress.config.js file under e2e setup -
###### it will be applied globally
    
    viewportHeight: 1080,
    viewportWidth: 1920,


##### to apply to a specific spec use command -
        cy.viewport(550, 750);
----------------------------------------------------------------------------------------------------------

#### 29. Retry: 

##### add command in cypress.config.js file under e2e setup -
###### it will be applied globally 
    
    retries:{
      runMode: 0,
      openMode: 0
    },


##### to apply to a specific spec use command -

    it("Retries on failure", {
        retries: {
            runMode: 2,
            openMode: 2
        },
    }, () => {
        cy.visit("https://www.webdriveruniversity.com/");
    })
----------------------------------------------------------------------------------------------------------

#### 30. Timeouts:

##### Default command timeout for specific test -
    Cypress.config('defaultCommandTimeout', 20000);

    
##### URL Timeouts -
    cy.visit(("https://www.webdriveruniversity.com/"), { timeout: 10000 });

        
##### Command Timeouts -
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true }, { timeout: 10000 });

        
##### Assertion Timeouts -
    cy.get('[name="first_name"]').type('John').should('be.visible', { timeout: 10000 });
----------------------------------------------------------------------------------------------------------

#### 31. Specific Browser:

    if (Cypress.isBrowser('electron')) {
            cy.log('TEST RUNNING IN ELECTRON BROWSER!!');
        }
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

1. Reports - 

    Cypress multireporter/junit reporter -

    Command to run: 
    npm install cypress-multi-reporters mocha-junit-reporter --save-dev

    Add code to cypress config: 
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        configFile: 'reporter-config.json',
    },

    Create a file with name: reporter-config.json
    {
        "reporterEnabled": "spec, mocha-junit-reporter",
        "mochaJunitReporterReporterOptions": {
            "mochaFile": "cypress/reports/junit/reports-[hash].xml"
        }
    }

    Merge the reports:
    npx junit-merge -d cypress/reports/junit -o cypress/reports/junit/reports.xml

    Delete the reports:
    rm -rf cypress/reports/* || true
    rm -rf cypress/reports/junit/reports.xml


    cypress-mochawesome-reporter - 

    Command to run: 
    npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev

    Create a file with name: reporter-config.json
    {
    "reporterEnabled": "spec, cypress-multi-reporters",
    "mochaJunitReporterReporterOptions": {
        "mochaFile": "cypress/reports/junit/reports-[hash].xml"
    },
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mochawesome",
            "quite": true,
            "overwrite": false,
            "html": false,
            "json": true
            }
        }
    }

    Merge the reports:
    npx mochawesome-merge "cypress/reports/mochawesome/*.json" > mochawesome.json && npx marge mochawesome.json

    Check the reports:
    mochawesome-report/mochawesome.html
    
    Delete the reports:
    rm -rf cypress/reports/* || true
    rm -rf mochawesome-report/* || true
----------------------------------------------------------------------------------------------------------

2. Multiple Configuration Files - 

    Create Folder - config
    Add files - qa.json, staging.json, prod.json

    Add custom code in cypress config file - 
    //at top
    const fs = require('fs-extra');
    const path = require('path');

    function getConfigurationByFile(file) {
    const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)

    if (!fs.existsSync(pathToConfigFile)) {
        console.log("No custom config file found.");
        return {};
    }

    return fs.readJson(pathToConfigFile);
    }

    //in e2e - setupNodeEvents
    const file = config.env.configFile || ''

    return getConfigurationByFile(file)

    Run command:
    npx cypress open --env configFile=staging
    npx cypress run --spec cypress/e2e/automation-test-store/add-multiple-items-to-basket.js --env configFile=staging
----------------------------------------------------------------------------------------------------------

3. Cypress Dashboard - 

    Go to the - https://cloud.cypress.io/projects/
    Login to Cypress
    Create new organization 
    Go to the Cypress app - Runs - Connect your project to the Cypress Dashbaord - select & Connect project
    Go to the Project Settings - Copy the 'Project ID' Record Keys
    Go to the Cypress config file - under module exports - add ProjectId: '5guftj'
    Link dashboard with run - npx cypress run --record --key ebab65d6-6c3e-423e-8a03-f995d0d4a243 
    GO the the Dashboard - Latest runs
----------------------------------------------------------------------------------------------------------

4. Jenkins - 

    ▪ Jenkins is a ‘Free Open Source’ automation server.
    ▪ Jenkins aids the process of automating different parts of the software development life cycle such 
      as building,  testing, deploying and facilitating continuous integration and continuous delivery.
    ▪ To simplify the process of triggering automated test(s); by setting up a platform (Jenkins) in order 
      to trigger automated tests (Framework).
    ▪ Jenkins comes bundled with lots of useful functionality and free plugins.

    Download & Setup 
    ▪ JDK
    ▪ Jenkins - Download 
        Go to the https://www.jenkins.io/download/
        Select LTS - Generic Java package (.war)
        Go to the path and run command: java -Dfile.encoding=UTF-8 -jar jenkins.war --httpPort=8080
        Go to the browser: http://localhost:8080/
        Go to the path: C:\Users\hp\.jenkins\secrets\initialAdminPassword
        Copy the password & Paste in Briwser - Unlock Jenkins - Administrator password
        Customize Jenkins - Install Suggested Plugins 
        Getting Started - Setup Admin details
        Login & Enter creds: admin / admin
        Instance Configuration 
        Save & Finish 

    ▪ Install Pulgins 
        Go to the Manage Jenkins - Plugins 
        GitHub Authentication 
        Github Integration 
        NodeJS

    ▪ Tools Configuration
        Go to the Manage Jenkins - Tools 
        JDK 
        Git
        NodeJS

    ▪ Create a Project
        Go to the New Item - Freestyle project
        Add Source Code Management - Git
        Add Build Steps - Execute Windows batch command
        Parameterized - Choice Parameter
----------------------------------------------------------------------------------------------------------

5. Parallelization - 
    ▪ If your project has a large number of tests, it can take a long time for tests to complete running serially 
      on one machine. 
    ▪ Running tests in parallel across many virtual machines can save your team time and money when running tests 
      in Continuous Integration (CI).
    ▪ Cypress can run recorded tests in parallel, across multiple machines. 
    ▪ ![alt text](parallelization-cypress.png)
    ▪ Cypress' parallelization strategy is file-based, so in order to utilize parallelization, 
      your tests will need to be split across separate files.
    ▪ Cypress will assign each spec file to an available machine based on balance strategy. 
      Due to this balance strategy, the run order of the spec files is not guaranteed when parallelized.
    ▪ Command to run - cypress run --record --key=abc123 --parallel
    
    Setup with Jenkins -
    ▪ Configure Jenkins to be accesible from a local network.
    ▪ Setup two Jenkins slaves on a dedicated High end(Powerful) machine.
    ▪ Connect the Jenkins Host to the slave node(s).
    ▪ When running cypress tests across more than 1 CI systems, ensure your CI system abide to the required criteria.
    ▪ In order to run in parallel mode each machine must send identical environment parameters such as:
        -specs
        -osName
        -osVersion
        -browserName
        -browserVersion 
    ▪  This machine sent the following parameters:
        { "
        osName ": "win32", osVersion ": "10.0.18363", browserName ":
        "Electron", browserVersion ": "80.0.3987.158", "specs": […]
        }
----------------------------------------------------------------------------------------------------------
       











63,64,65,66 - 8:30 hrs
----------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------

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
screenshot
fixtures - data driven from external source 
env files - default, create separate for diff env - QA, Staging
create custom commands 
page objects
retry
reports 
config options
integration with git/jenkins
run with dashboard/cloud
pause/debug
api testing
parallel execution 
mocking
same origin policy
timeouts
dashboard
assertions
tags
bdd
custom scripts

