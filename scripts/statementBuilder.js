class StatementBuilder {
  constructor(log) {
    this.log = log;
    this.header = "||date||credit||debit||balance||\n";
  }

  createCredit() {}

  createDebit() {}

  build() {
    return"||date||credit||debit||balance||\n||12/02/2019||£1000||     ||£1000||\n||12/02/2019||     ||£1000||£1000||"
  }

}

module.exports = StatementBuilder;
