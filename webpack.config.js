const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),  //entry: './src/index.js'
  output: {
    path: path.resolve(__dirname, 'public'),  //essa será a pasta que receberá o arquivo
    filename: 'bundle.js' //nome do arquivo
  },
  devServer: {
    static: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      },
      
    ]
  },
};