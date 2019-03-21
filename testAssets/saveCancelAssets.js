module.exports = (ePage, entryField, fieldValue, button, fieldValue2) => {
    ePage
    .clearValue(entryField)
    .setValue(entryField, fieldValue)
    .click(button)
    .pause(3000)
    ePage.expect.element(entryField).value.to.equal(fieldValue2).before(5000)
    ePage
    .pause(500)
 }