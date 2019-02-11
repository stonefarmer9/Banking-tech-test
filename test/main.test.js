const Account = require('../scripts/main.js')


describe('Account', ()=> {

  test('#Deposit increases the account balance', ()=>{
    const myAccount = new Account
    myAccount.deposit(100)
    expect(myAccount.balance).toBe(100)
  })
})
