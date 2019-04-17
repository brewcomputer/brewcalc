const config = {
  "mode": "development",
  "output": {
    "path": __dirname + '/lib',
    "filename": "brewcalc.js"
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
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/preset-env",
              "@babel/preset-flow"
            ]
          }
        }
      }
    ]
  }
}

module.exports = config
