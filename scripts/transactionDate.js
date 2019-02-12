class TransactionDate {
	constructor(){
		this.today = new Date;
	}

	getTransactionDate(){
		var date = this.today;
		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		day = this._formatDay(day);
		month = this._formatMonth(month);
		return `${day}/${month}/${year}`;
	}

	_formatDay(day){
		day = (day < 10) ? day = ("0" + day) : (day);
		return day;
	}

	_formatMonth(month) {
		month = (month < 10) ? month = ("0" + month) : (month);
		return month;
	}
}

module.exports = TransactionDate;
