var ePage = {}
let buttonTest = require('../testAssets/saveCancelAssets')
let clickByText = require('../testAssets/changeRetrieveAssets')


module.exports = {
    beforeEach: browser => {
        ePage = browser.page.employeeManagerPage()
        ePage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Save': browser => { 
        ePage
        .waitForElementPresent('@addEmployee', 5000)
        .click('@addEmployee')
        .pause(1500)
        clickByText(ePage, 'New Employee')
        ePage
        .waitForElementPresent('@nameEntry')
        buttonTest(ePage, '@nameEntry', 'JoeJoe Banana', '@save', 'JoeJoe Banana')
        buttonTest(ePage, '@phoneEntry', '4804567986', '@save', '4804567986')
        buttonTest(ePage, '@emailEntry', 'buhbuhnanuhs@bmail.banana', '@save', 'buhbuhnanuhs@bmail.banana')
        buttonTest(ePage, '@titleEntry', 'Digger of Ditches', '@save', 'Digger of Ditches')
    },
    'Cancel': browser => { 
        ePage
        .waitForElementPresent('@addEmployee', 5000)
        .click('@addEmployee')
        .pause(1500)
        clickByText(ePage, 'New Employee')
        ePage
        .waitForElementPresent('@nameEntry')
        buttonTest(ePage, '@nameEntry', 'JoeJoe Banana', '@cancel', 'New Employee')
        buttonTest(ePage, '@phoneEntry', '4804567986', '@cancel', '1111111111')
        buttonTest(ePage, '@emailEntry', 'buhbuhnanuhs@bmail.banana', '@cancel', 'abc')
        buttonTest(ePage, '@titleEntry', 'Digger of Ditches', '@cancel', 'New Employee')

        


    },
}