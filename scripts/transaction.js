class Transaction {
	constructor (type, amount, balanceAfter) {
		this.date = Transaction.formatDate();
		this.transactionType = type;
		this.amount = amount;
		this.balanceAfter = balanceAfter;
	}

	static formatDate (date = new Date){
		return date.toLocaleDateString('en-gb');
	}
}

module.exports = Transaction;
