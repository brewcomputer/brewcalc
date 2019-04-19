const config = {
  mode: "development",
  entry: {
    ['brewcalc.min']: './src/index.js',
    import: './src/importFromBeerXml.js'
  },
  output: {
    library: "brewcalc",
    libraryTarget: "umd",
    umdNamedDefine: true,
    path: __dirname + "/lib",
    filename: "[name].js"
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: "pre",
        loader: "prettier-loader",
        options: {
          parser: "babel",
          singleQuote: true,
          semi: false,
          jsxBracketSameLine: true,
          tabWidth: 2
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}

module.exports = config
