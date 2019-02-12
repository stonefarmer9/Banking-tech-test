const Transaction = require("./transaction.js");
const Statement = require("./statement.js");
const TransactionDate = require("../scripts/transactiondate.js");

class Account {
	constructor () {
		this.balance = 0;
		this.log = [];
	}

	deposit(amount) {
		this.balance += amount;
		const date = new TransactionDate().formatTransactionDate();
		this.log.push(new Transaction(date, "credit", amount, this.balance));
	}

	withdraw(amount){
		this.balance -= amount;
		const date = new TransactionDate().formatTransactionDate();
		this.log.push(new Transaction(date, "debit", amount,this.balance));

	}


	showStatement(){
		var statement = new Statement(this.log);
		console.log(statement.createStatement());
	}


}

module.exports = Account;
