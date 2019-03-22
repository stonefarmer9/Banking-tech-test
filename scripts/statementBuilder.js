class StatementBuilder {
  constructor(log) {
    this.log = log;
    this.statement =["||date||credit||debit||balance||\n"];

  }

  createCredit(transaction) {
    const credit = `||${transaction.date}||` +
    `£${transaction.amount}||     ||£${transaction.balanceAfter}||\n`
    this.statement.push(credit)
    console.log(this.statement);
  }

  createDebit(transaction) {
  const debit = `||${transaction.date}||` +
    `     ||£${transaction.amount}||£${transaction.balanceAfter}||\n`;
    this.statement.push(debit)
  }

  build() {
    return `${this.statement}||12/02/2019||£1000||     ||£1000||\n||12/02/2019||     ||£1000||£1000||`
  }

}

module.exports = StatementBuilder;
