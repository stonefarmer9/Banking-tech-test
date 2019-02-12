 class Statement {
  constructor (log) {
    this.statementLog = log;
  }

  createStatement() {
    var statement = "|date|credit|debit|balance|\n";
    this.statementLog.forEach(function(transaction){
    if (transaction.transactionType == "credit"){
      statement = statement + `|${transaction.date}|£${transaction.amount}|     |£${transaction.balanceAfter}|\n`;
    } else {
      statement = statement + `|${transaction.date}|     |£${transaction.amount}|£${transaction.balanceAfter}|\n`;
    }
  }
)
console.log(statement)
return statement
}



}
module.exports = Statement
