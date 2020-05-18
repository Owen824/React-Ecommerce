const path = require('path');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: './public/bundle.js',
    path: path.resolve(__dirname, './'),
  },
  module: {
      rules:[
          {test: /.jsx$/, exclude: /node_modules/, use: {loader:'babel-loader',
        options:{presets:['@babel/preset-react', '@babel/preset-env',{
          'plugins': ['@babel/plugin-proposal-class-properties']}]}}},
        {test: /.js$/, exclude: /node_modules/, use: {loader:'babel-loader',
        options:{presets:['@babel/preset-env']}}},
        {
          test: /\.css$/,
          use:[
            {
              loader:'style-loader'
            },
            {
              loader:'css-loader',
              options:{
                modules: {
                  localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              }
            }
          ]
        }
      ]
  },
  devServer:{
      port:9000
  }

};