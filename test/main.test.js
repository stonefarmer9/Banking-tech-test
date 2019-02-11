const Account = require("../scripts/main.js");


describe("Account", () => {

	const myAccount = new Account;

	beforeEach(() => {
		myAccount.log = [];
		myAccount.balance = 0;
	})

	test("#Deposit increases the account balance", () => {
		myAccount.deposit(100);
		expect(myAccount.balance).toBe(100);
	});

	test("#Withdraw decreases the account balance", () => {
		myAccount.deposit(100);
		myAccount.withdraw(50);
		expect(myAccount.balance).toBe(50);
	});

	test('#Deposit is logged with a time in the account log', () => {
		myAccount.deposit(100);
		expect(myAccount.log).toContainEqual(["deposit", 100, "11/02/2019", 100])
	})

	test('#Withdraw is logged with a time in the account log', () => {
		myAccount.deposit(100);
		myAccount.withdraw(50)
		expect(myAccount.log).toContainEqual(["withdrawal", 50, "11/02/2019", 50])
	})

	test('#statement shows your transactions', () => {
		myAccount.deposit(1000);
		myAccount.withdraw(50)
		myAccount.deposit(100);
		myAccount.withdraw(50)
		expect(myAccount.statement()).toEqual('')
	})



});
