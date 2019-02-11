const foo = require('../scripts/main.js')

beforeEach(() => {
  const myAccount = new Account
})

describe('Account', ()=> {
  test('#Deposit increases the account balance', ()=>{
    myAccount.deposit(100)
    expect(myAccount.balance).toBe(100)
  })
})
