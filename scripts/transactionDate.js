class TransactionDate {
	constructor(){
		this.today = new Date;
    this.day = this.today.getDate();
    this.month = this.today.getMonth() + 1;
    this.year = this.today.getFullYear();
	}


	formatTransactionDate(){
		var day = this._formatDay(this.day);
		var month = this._formatMonth(this.month);
		return `${day}/${month}/${this.year}`;
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
