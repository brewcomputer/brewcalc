const babelrc = {
  babelrc: false,
  presets: ['@babel/preset-env', '@babel/preset-flow'],
}

module.exports = require('babel-jest').createTransformer(babelrc)
