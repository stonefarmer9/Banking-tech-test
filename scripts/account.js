const Transaction = require("./transaction.js");
const Statement = require("./statement.js");

class Account {
	constructor () {
		this.balance = 0.00;
		this.log = [];
	}

	deposit(amount, transaction = Transaction) {
		this.balance += amount;
		this.log.push(new transaction("credit", amount, this.balance));
	}

	withdraw(amount, transaction = Transaction) {
		this.balance -= amount;
		this.log.push(new transaction("debit", amount,this.balance));
	}

	showStatement(statement = new Statement(this.log)){
		var statement = statement;
		return (statement.createStatement());
	}
}

module.exports = Account;
