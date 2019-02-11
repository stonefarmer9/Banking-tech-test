class Transaction {
  constructor (date, type, amount, balanceAfter) {
    this.date = date
    this.transactionType = type;
    this.amount = amount;
    this.balanceAfter = balanceAfter;
  }
}

module.exports = Transaction;
