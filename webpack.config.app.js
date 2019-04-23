const config = {
  mode: "development",
  entry: {
    brewcalc: './src/index.js',
    import: './src/importFromBeerXml.js'
  },
  output: {
    library: "brewcalc",
    libraryTarget: "umd",
    umdNamedDefine: true,
    path: __dirname + "/lib",
    filename: "[name].js"
  },
  devtool: "source-map",
  module: {
    rules: require('./webpack.config.rules')
  }
}

module.exports = config
