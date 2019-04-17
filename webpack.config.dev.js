const config = {
  "mode": "development",
  "output": {
    "path": __dirname + '/lib',
    "filename": "brewcalc.js"
  },
  "module": {
    "rules": [
      {
        "test": /\.js?$/,
        "enforce": 'pre',
        "loader": 'prettier-loader',
        "options": {
          "parser": "babel",
          "singleQuote": true,
          "semi": false,
          "jsxBracketSameLine": true,
          "tabWidth": 2
        }
      },
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader"
        }
      }
    ]
  }
}

module.exports = config
