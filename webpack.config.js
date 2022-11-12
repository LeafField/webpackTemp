const path = require("path");
const webpackWatchedGlobPlugin = require("webpack-watched-glob-entries-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")


const entries = webpackWatchedGlobPlugin.getEntries([path.resolve(__dirname, "./src/js/*.js")])();

const htmlGlobPlugins = (entries, srcPath) => {
  return Object.keys(entries).map(key => new HtmlWebpackPlugin({
    inject: "body",
    filename: `${key}.html`,
    template: `${srcPath}/${key}.html`,
    chunks: [key],
  }))
}

/** @type {import("webpack").Configuration} */
module.exports = {

  mode: "development",
  devtool: "source-map",
  entry: entries,
  output: {
    path: path.resolve(__dirname, "./dist/js"),
    filename: "[name].js",
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },


  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    ...htmlGlobPlugins(entries, "./src")
  ]
}
