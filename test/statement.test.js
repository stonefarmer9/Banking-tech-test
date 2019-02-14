const Statement = require("../scripts/statement.js");

describe("Statement", () => {

	test("#createStatement returns a statement showing the deposit", () => {
		let log = [{
			"amount": 1000,
			"balanceAfter": 1000,
			"date": "12/02/2019",
			"transactionType": "credit"}];
		const statement = new Statement(log);
		expect(statement.createStatement()).toMatch("||date||credit||debit||balance||\n||12/02/2019||£1000||     ||£1000||");
	});
	test("#createStatement returns a statement showing the withdrawal", () => {
		let log = [{
			"amount": 1000,
			"balanceAfter": 1000,
			"date": "12/02/2019",
			"transactionType": "debit"}];
		const statement = new Statement(log);
		expect(statement.createStatement()).toMatch("||date||credit||debit||balance||\n||12/02/2019||     ||£1000||£1000||");

	});

});
