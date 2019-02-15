const Transaction = require("./transaction.js");
const Statement = require("./statement.js");

class Account {
	constructor () {
		this.balance = 0.00;
		this.log = [];
	}

	deposit(amount, date = new Date) {
		this.balance += amount;
		date = date.toLocaleDateString('en-GB')
		this.log.push(new Transaction(date, "credit", amount, this.balance));
	}

	withdraw(amount, date = new Date){
		this.balance -= amount;
		date = date.toLocaleDateString('en-GB');
		this.log.push(new Transaction(date, "debit", amount,this.balance));

	}

	showStatement(statement = new Statement(this.log)){
		var statement = statement;
		return (statement.createStatement());
	}
}

module.exports = Account;
