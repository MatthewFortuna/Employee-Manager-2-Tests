var ePage = {}
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
    'Search': browser => { 
        ePage
        .waitForElementPresent('@addEmployee', 5000)
        .click('@addEmployee')
        .pause(1500)
        clickByText(ePage, 'New Employee')
        ePage
        .waitForElementPresent('@nameEntry')
        .clearValue('@nameEntry')
        .setValue('@nameEntry', 'Dave Buds')
        .click('@save')
        .pause(3000)
        .click('@addEmployee')
        .pause(1500)
        clickByText(ePage, 'New Employee')
        ePage
        .setValue('@search', 'Dave')
        clickByText(ePage, 'Dave Buds')
        ePage.expect.element('@nameEntry').value.to.equal('Dave Buds').before(5000)
        ePage
        .pause(500)
    }
}