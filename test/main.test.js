const foo = require('../scripts/main.js')

describe('foo', () => {
  test('It returns bar', () => {
    expect(foo()).toEqual('bar')
  })
})
