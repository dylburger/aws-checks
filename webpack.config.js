var path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
    resolve: {
      alias: {
        js: path.resolve(__dirname, "src/js/")
      }
    }
  }
};
