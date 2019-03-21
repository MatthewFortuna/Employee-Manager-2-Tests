var ePage = {}
let createEmployee = require('../testAssets/createEmployeeAssets')
let createArray = require('../testAssets/createEmployeeArray')


module.exports = {
    beforeEach: browser => {
        ePage = browser.page.employeeManagerPage()
        ePage.navigate()
            .waitForElementPresent('#root', 5000)
    },
    after: browser => {
        browser.end()
    },
    'Create Employee': browser => { 
        createArray.forEach(array => {
            createEmployee(ePage, array)
        })
    },
}   