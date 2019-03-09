const Transaction = require('../scripts/transaction.js')
var MockDate = require('mockdate')

beforeEach(() => {
  MockDate.set("03/09/2019")
});

afterEach(() => {
  MockDate.reset;
})
describe("#formatDate", () => {
  it('formats a date object as DD/MM/YYYY', () => {
    var date = new Date
    console.log(date);
    expect(Transaction.formatDate(date)).toBe("09/03/2019")
  })
})
