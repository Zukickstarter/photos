const path = require('path');

console.log(__dirname);

module.exports = {
  mode: 'development',
  watch: true,
  entry: './user/index.jsx',
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      options: {
        presets: [
          '@babel/preset-react'
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-do-expressions',
          '@babel/plugin-proposal-nullish-coalescing-operator'
        ]
      }
    }
  ]
  },
  output: {
    path: path.resolve(__dirname, 'pub'),
    filename: "bundle.js"
  }
}