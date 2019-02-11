class Account {
	constructor () {
		this.balance = 0;
		this.log = [];
	}

	deposit(amount) {
		this.balance += amount;
		this.log.push( ["deposit", amount] )
	}

	withdraw(amount){
		this.balance -= amount;
	}

}

module.exports = Account;
