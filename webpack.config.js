const path = require('path');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: './public/bundle.js',
    path: path.resolve(__dirname, './'),
  },
  module: {
      rules:[
        // preset-react將副檔為jsx的檔案編譯成es6，preset-env 將es6 編譯成es5
          {test: /.jsx$/, exclude: /node_modules/, use: {loader:'babel-loader',
        options:{presets:['@babel/preset-react', '@babel/preset-env',{
          'plugins': ['@babel/plugin-proposal-class-properties']}]}}},
        {test: /.js$/, exclude: /node_modules/, use: {loader:'babel-loader',
        options:{presets:['@babel/preset-env']}}},
        {
          test: /\.css$/,
          use:[
            {   // 將js裡的css 內容轉成 browser看得懂的css
              loader:'style-loader'
            },
            {   // 將css 載入到 js裡
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