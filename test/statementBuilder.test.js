const StatementBuilder = require('../scripts/statementBuilder');


describe('statementBuilder', ()=> {

  let builder;
  let log;
  let debit;
  let credit;


  beforeEach(() => {


     log = [{
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

      credit = {
        "amount": 1000,
        "balanceAfter": 1000,
        "date": "12/02/2019",
        "transactionType": "credit"}

    builder = new StatementBuilder(log)
  })

  it('returns a completed bank statement', () => {

    expect(builder.build()).toMatch("||date||credit||debit||balance||\n||12/02/2019||£1000||     ||£1000||\n||12/02/2019||     ||£1000||£1000||")
  })

  describe("#createDebit", () => {
    it("adds a credit transaction to the statement array", () => {
      builder.createDebit(debit)
      expect(builder.statement.length).toBe(2)
      expect(builder.statement[1]).toContain(["||12/02/2019||     ||£1000||£1000||"])
    })
  })

  describe("#createCredit", () => {
    it('adds a credit transaction to the statement array', () => {
      builder.createCredit(credit)
      expect(builder.statement.length).toBe(2)
      expect(builder.statement[1]).toContain(["||12/02/2019||£1000||     ||£1000||"])

    })
  })
})
