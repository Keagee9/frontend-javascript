const path = require('path');

module.exports = {
  mode: 'development', // or 'production'
  entry: './main.ts',
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
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.resolve(__dirname, './'), // Serve static files from the current directory
    compress: true,
    port: 9000,
    open: true,
  },
};