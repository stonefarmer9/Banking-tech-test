const TransactionDate = require("../scripts/transactiondate.js");
var MockDate = require("mockdate");

describe("Date", () => {
	test("#getTransactionDate returns a formatted date", () => {
		MockDate.set("02/12/2019");
		const today = new TransactionDate(new Date());
		expect(today.getTransactionDate()).toMatch("12/02/2019");
		MockDate.reset;
	});
});
