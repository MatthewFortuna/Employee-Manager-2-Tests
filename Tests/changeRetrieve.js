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
    'Change Retrieve': browser => { 
        ePage
        .waitForElementPresent('@addEmployee', 5000)
        .click('@addEmployee')
        .pause(2000)
        clickByText(ePage, "New Employee")
        ePage
        .waitForElementPresent('@nameEntry')
        .clearValue('@nameEntry')
        .setValue('@nameEntry', 'Jenny Walker')
        .clearValue('@phoneEntry')
        .setValue('@phoneEntry', '7431307734')
        .clearValue('@titleEntry')
        .setValue('@titleEntry', 'Speaker of Words')
        .click('@save')
        .pause(2000)
        .click('@addEmployee')
        ePage
        .pause(2000)
        clickByText(ePage, "New Employee")
        ePage
        .setValue('@nameEntry', '1')
        .click('@save')
        clickByText(ePage, "Jenny Walker")
        ePage.expect.element('@nameEntry').value.to.equal('Jenny Walker').before(5000)
        ePage.expect.element('@phoneEntry').value.to.equal('7431307734').before(5000)
        ePage.expect.element('@titleEntry').value.to.equal('Speaker of Words').before(5000)
    },
}   