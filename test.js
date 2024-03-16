const test = require('brittle')
const c = require('compact-encoding')
const variant = require('.')

test('basic', (t) => {
  const v = variant(
    c.string,
    c.int,
    c.bool
  )

  const [string, int, bool] = v

  console.log(v)

  t.is(c.decode(v, c.encode(string, 'hello world')), 'hello world', 'string')
  t.is(c.decode(v, c.encode(int, 1234)), 1234, 'int')
  t.is(c.decode(v, c.encode(bool, true)), true, 'bool')
})
