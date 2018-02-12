var path = require('path');

module.exports = {
  entry: {
    App:"./app/assets/scripts/App.js",
    vendor: "./app/assets/scripts/vendor.js",
    index: "./app/assets/scripts/index.js"
  },
  output:{
    path: path.resolve(__dirname, "./app/temp/scripts") ,
    filename: "[name].js"
  },
  module:{
    loaders:[
      {
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{
          presets:['react','es2015','env']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  resolve:{
    extensions:['.js','.jsx','.json']
  }
}
