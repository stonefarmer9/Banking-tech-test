class TransactionDate {
	constructor(){
		this.today = new Date;
	}

	getTransactionDate(){
		var date = this.today;
		var day = date.getDate();
		var month = date.getMonth();
		var year = date.getFullYear();
		this._formatDay(day);
		this._formatMonth(month);
		return `${day}/${month}/${year}`;
	}

	_formatDay(day){
		(day < 10) ? day = ("0" + day) : (day);
	}

	_formatMonth(month) {
		(month < 10) ? month = ("0" + month) : (month);
	}
}

module.exports = TransactionDate;
