const Account = require("../scripts/account.js");


describe("Account", () => {

	const myAccount = new Account;

	beforeEach(() => {
		myAccount.log = [];
		myAccount.balance = 0;
	});

	test("#Deposit increases the account balance", () => {
		myAccount.deposit(100);
		expect(myAccount.balance).toBe(100);
	});

	test("#Withdraw decreases the account balance", () => {
		myAccount.deposit(100);
		myAccount.withdraw(50);
		expect(myAccount.balance).toBe(50);
	});

	test("#Deposit is logged with a time in the account log", () => {
		myAccount.deposit(100);
		expect(myAccount.log).toEqual([{"amount": 100, "balanceAfter": 100, "date": "12/02/2019", "transactionType": "credit"}]);
	});

	test("#Withdraw is logged with a time in the account log", () => {
		myAccount.deposit(100);
		myAccount.log = [];
		myAccount.withdraw(50);
		expect(myAccount.log).toEqual( [{"amount": 50, "balanceAfter": 50, "date": "12/02/2019", "transactionType": "debit"}]);
	});

	test("#statement shows your transactions", () => {
		myAccount.deposit(1000);

		expect(myAccount.statement()).toMatch("|date|credit|debit|balance|\n|12/02/2019|£1000|     |£1000|");
	});



});
