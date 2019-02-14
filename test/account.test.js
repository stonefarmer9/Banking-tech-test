const Account = require("../scripts/account.js");
var MockDate = require("mockdate");

describe("Account", () => {

	let myAccount;

	beforeEach(() => {
		myAccount = new Account();
		myAccount.log = [];
		myAccount.balance = 0;
		myAccount.deposit(100);
		MockDate.set("02/12/2019");
	});
	afterEach(() => {
		MockDate.reset;
	});


	test("#Deposit increases the account balance", () => {

		expect(myAccount.balance).toBe(100);
	});

	test("#Withdraw decreases the account balance", () => {
		myAccount.withdraw(50);

		expect(myAccount.balance).toBe(50);
	});

	test("#Deposit is logged with a time in the account log", () => {
		expect(myAccount.log).toEqual([{
			"amount": 100,
			"balanceAfter": 100,
			"date": "12/02/2019",
			"transactionType":
			"credit"}]);
	});

	test("#Withdraw is logged with a time in the account log", () => {
		myAccount.log = [];
		myAccount.withdraw(50);
		expect(myAccount.log).toEqual( [{
			"amount": 50,
			"balanceAfter": 50,
			"date": "12/02/2019",
			"transactionType": "debit"}]);
	});

	test("#statement shows your transactions in an easily read format", () => {
		myAccount.deposit(100);

		expect(myAccount.showStatement()).toMatch("|date|credit|debit|balance|\n|12/02/2019|£100|     |£100|");
	});



});
