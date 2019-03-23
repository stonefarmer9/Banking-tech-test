const StatementBuilder = require('./statementBuilder.js');

 class Statement {
  constructor (log) {
    this.log = log;
    this.statement = "||date||credit||debit||balance||\n";
  }

  createStatement(statementBuilder = StatementBuilder) {
    let builder = new statementBuilder();
    this.log.forEach(function(transaction){
      transaction.transactionType == "credit" ?
        builder.createCredit(transaction) :
        builder.createDebit(transaction);
    })
    return builder.build()
  }
}
module.exports = Statement
