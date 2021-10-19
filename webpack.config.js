const commonConfig = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  target: 'web',
}

const prodConfig = {
  mode: 'production',
  output: {
    library: 'brewcalc',
    libraryTarget: 'umd',
    path: __dirname + '/web',
    filename: 'brewcalc.min.js',
  },
  ...commonConfig,
}

const devConfig = {
  mode: 'development',
  output: {
    library: 'brewcalc',
    libraryTarget: 'umd',
    path: __dirname + '/web',
    filename: 'brewcalc.js',
  },
  ...commonConfig,
}

module.exports = [prodConfig, devConfig]
