class Account {
	constructor () {
		this.balance = 0;
		this.log = [];
	}

	deposit(amount) {
		this.balance += amount;
		const date = this._getDate();
		this.log.push( ["deposit", amount, date ] );
	}

	withdraw(amount){
		this.balance -= amount;
		this.log.push( ["withdrawal", amount])

	}

_getDate() {
	var date = new Date
	var day = date.getDate();
	var month = date.getMonth();
	var year = date.getFullYear();
	if (day < 10) {
		day = '0' + day
	}
	if (month < 10) {
		month = '0' + (month + 1)
	}
	return `${day}/${month}/${year}`
}

}

module.exports = Account;
