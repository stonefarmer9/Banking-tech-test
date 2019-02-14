 class Statement {
  constructor (log) {
    this.statementLog = log;
    this.statement = "||date||credit||debit||balance||\n";
  }

  createStatement() {
    var statement = this.statement
    statement = statement + Statement._build(this.statementLog, statement)
    return statement
}
  static _creditStatement(statement, transaction){
    statement = statement + `||${transaction.date}||` +
    `£${transaction.amount}||     ||£${transaction.balanceAfter}||\n`;
    return statement
  }

  static _debitStatement(statement, transaction){
    statement = statement + `||${transaction.date}||` +
    `     ||£${transaction.amount}||£${transaction.balanceAfter}||\n`;
    return statement
  }

  static _build(log, statement){
    log.forEach(function(transaction){
    (transaction.transactionType == "credit") ?
      statement = Statement._creditStatement(statement, transaction) :
      statement = Statement._debitStatement(statement, transaction);
    })
    return statement
  }
}
module.exports = Statement
