const config = [
  {
    mode: "production",
    output: {
      library: "brewcalc",
      libraryTarget: "umd",
      umdNamedDefine: true,
      path: __dirname + "/lib",
      filename: "brewcalc.min.js"
    },
    optimization: {
      minimize: true
    },
    module: {
      rules: require("./webpack.config.rules")
    }
  },
  {
    mode: "development",
    output: {
      library: "brewcalc",
      libraryTarget: "umd",
      umdNamedDefine: true,
      path: __dirname + "/lib",
      filename: "brewcalc.js"
    },
    devtool: "source-map",
    module: {
      rules: require("./webpack.config.rules")
    }
  }
]

module.exports = config
