const { dependencies, devDependencies } = require('./package.json')
const lodash = require('./node_modules/lodash')

const dependenciesImports = lodash.uniq(
  lodash.concat(
    lodash.map(lodash.keys(dependencies), (_package) => `^${_package}(.*)`),
    [''],
    lodash.map(lodash.keys(devDependencies), (_package) => `^${_package}(.*)`)
  )
)

/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  importOrder: [...dependenciesImports].concat('', [
    '@/app(.*)',
    '@/public(.*)',
    '(.*)components(.*)',
    '(.*)icons|Icon(.*)',
    '(.*)models|model(.*)',
    '(.*)pages(.*)',
    '(.*)store(.*)',
    '(.*)utils(.*)',
    '(.*).css(.*)',
    '<THIRD_PARTY_MODULES>',
  ]),
  plugins: [
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
    require('prettier-plugin-tailwindcss'),
  ],
}
