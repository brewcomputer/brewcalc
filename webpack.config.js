const config = {
  "mode": "development",
  "output": {
    "path": __dirname + '/lib',
    "filename": "brewcalc.min.js"
  },
  "optimization": {
    "minimize": false
  },
  "module": {
    "rules": [
      {
        "enforce": "pre",
        "test": /\.(js|jsx)$/,
        "exclude": /node_modules/,
        "use": "eslint-loader"
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
