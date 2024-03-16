const c = require('compact-encoding')

module.exports = function variant (...variants) {
  variants = variants.flatMap((variant) => variant)

  const codecs = variants.map((variant, tag) => {
    return {
      tag,
      preencode (state, m) {
        c.uint.preencode(state, tag)
        variant.preencode(state, m)
      },
      encode (state, m) {
        c.uint.encode(state, tag)
        variant.encode(state, m)
      },
      decode (state) {
        c.uint.decode(state)
        return variant.decode(state)
      }
    }
  })

  codecs.decode = function decode (state) {
    const tag = c.uint.decode(state)
    const variant = variants[tag] || null
    if (variant === null) throw new Error(`unknown tag ${tag}`)
    return variant.decode(state)
  }

  return codecs
}
