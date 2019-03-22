const StatementBuilder = require('../scripts/statementBuilder');


describe('statementBuilder', ()=> {

  let log;
  let debit;

  beforeEach(() => {
    let log = [{
      "amount": 1000,
      "balanceAfter": 1000,
      "date": "12/02/2019",
      "transactionType": "credit"},
      {
  			"amount": 1000,
  			"balanceAfter": 1000,
  			"date": "12/02/2019",
  			"transactionType": "debit"}
    ];
    debit = {
      "amount": 1000,
      "balanceAfter": 1000,
      "date": "12/02/2019",
      "transactionType": "debit"}
  })

  it('returns a completed bank statement', () => {
    builder = new StatementBuilder(log)
    expect(builder.build()).toMatch("||date||credit||debit||balance||\n||12/02/2019||£1000||     ||£1000||\n||12/02/2019||     ||£1000||£1000||")
  })

  describe("#createDebit", () => {
    it("adds a credit transaction to the statement array", () => {
      builder = new StatementBuilder(debit)
      builder.createDebit(debit)
      expect(builder.statement.length).toBe(2)
      expect(builder.statement[1]).toContain(["||12/02/2019||     ||£1000||£1000||"])
    })
  })
})
