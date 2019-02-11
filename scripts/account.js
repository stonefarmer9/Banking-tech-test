const Transaction = require("./transaction.js");

class Account {
	constructor () {
		this.balance = 0;
		this.log = [];
	}

	deposit(amount) {
		this.balance += amount;
		const date = this._getDate();
		this.log.push(new Transaction(date, "credit", amount, this.balance));
	}

	withdraw(amount){
		this.balance -= amount;
		const date = this._getDate();
		this.log.push(new Transaction(date, "debit", amount,this.balance));

	}

	statement(){
		var statement = "|date|credit|debit|balance|\n";
		this.log.forEach(function(transaction){
			if (transaction.transactionType == "credit"){
				statement = statement + `|${transaction.date}|£${transaction.amount}|     |£${transaction.balanceAfter}|\n`;
			} else {
				statement = statement + `|${transaction.date}|     |£${transaction.amount}|£${transaction.balanceAfter}|\n`;
			}
		});
		return statement;
	}

	_getDate() {
		var date = new Date;
		var day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
		if (day < 10) {
			day = "0" + day;
		}
		if (month < 10) {
			month = "0" + (month + 1);
		}
		return `${day}/${month}/${year}`;
	}


}

module.exports = Account;
