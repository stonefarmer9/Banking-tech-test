const TransactionDate = require('../scripts/date.js')

describe('Date', () => {
  test('#getDate returns a formatted date', () => {
    today = new TransactionDate(2019-02-12T12:23:31.199Z)
    expect(today.getDate()).toMatch("12/02/2019")
  })
})
