const Account = require("../scripts/main.js");


describe("Account", () => {

	const myAccount = new Account;

	beforeEach(() => {
		myAccount.log = [];
	})

	test("#Deposit increases the account balance", () => {
		myAccount.deposit(100);
		expect(myAccount.balance).toBe(100);
	});

	test("#Withdraw decreases the account balance", () => {
		myAccount.withdraw(50);
		expect(myAccount.balance).toBe(50);
	});

	test("#Deposit amount is recorded in the account log", () =>{
		myAccount.deposit(100);
		expect(myAccount.log).toContainEqual(["deposit", 100, "11/02/2019"]);
	});

	test('#Withdraw amount is recorded in the account log', () => {
		myAccount.withdraw(50)
		expect(myAccount.log).toContainEqual(["withdrawal", 50, "11/02/2019"])
	});

	test('#Deposit is logged with a time', () => {
		myAccount.deposit(100);
		expect(myAccount.log).toContainEqual(["deposit", 100, "11/02/2019"])
	})

	test('#Withdraw is logged with a time', () => {
		myAccount.deposit(100);
		myAccount.withdraw(50)
		expect(myAccount.log).toContainEqual(["withdrawal", 50, "11/02/2019"])
	})



});
