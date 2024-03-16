# compact-encoding-variant

Compact codec for variant types.

```
npm i compact-encoding-variant
```

## Usage

```js
const c = require('compact-encoding')
const variant = require('compact-encoding-variant')

const codec = variant(c.string, c.int)

const [string, int] = codec

const b1 = c.encode(string, 'Hello world!')
// <Buffer 0 'Hello world!'>

const b2 = c.encode(int, 1234)
// <Buffer 1 1234>

c.decode(codec, b1)
// 'Hello world!'

c.decode(codec, b2)
// 1234
```

## License

Apache-2.0
