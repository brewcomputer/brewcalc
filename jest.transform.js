const babelrc = {
  babelrc: false,
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-transform-runtime',
  ],
}

module.exports = require('babel-jest').createTransformer(babelrc)
