class StatementBuilder {
  constructor() {
    this.statement =["||date||credit||debit||balance||\n"];

  }

  createCredit(transaction) {
    const credit = `||${transaction.date}||` +
    `£${transaction.amount}||     ||£${transaction.balanceAfter}||\n`
    this.statement.splice(1, 0, credit)
  }

  createDebit(transaction) {
  const debit = `||${transaction.date}||` +
    `     ||£${transaction.amount}||£${transaction.balanceAfter}||\n`;
    this.statement.splice(1, 0, debit)
  }

  build() {
    return this.statement.join("")
  }

}

module.exports = StatementBuilder;
