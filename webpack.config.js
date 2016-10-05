var path = require('path');

module.exports = {
  entry: {
    app: ['./app/app']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname,'app/scss'),
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.json$/, 
        loader: 'json'
      }
    ]
  },
  node: {
    readline: 'empty'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss']
  }
}
