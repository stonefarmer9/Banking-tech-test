class TransactionDate {
  constructor(){
  this.today = new Date;
}

  getTransactionDate(){
    var date = this.today
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

module.exports = TransactionDate;
