const Account = require("../scripts/main.js");


describe("Account", () => {

	const myAccount = new Account;

	test("#Deposit increases the account balance", () => {
		myAccount.deposit(100);
		expect(myAccount.balance).toBe(100);
	});

	test("#Withdraw decreases the account balance", () => {
		myAccount.withdraw(50);
		expect(myAccount.balance).toBe(50);
	});

	test('#Deposit amount is recorded in the account log', () =>{
		myAccount.deposit(100)
		expect(myAccount.log).toContainEqual(["deposit", 100])
	})
});
