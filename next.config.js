// eslint-disable-next-line import/no-extraneous-dependencies
const withTM = require('next-transpile-modules')

module.exports = withTM({
  target: 'server',
  transpileModules: ['lodash-es'],
  devIndicators: {
    autoPrerender: false,
  },
})
