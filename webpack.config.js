const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


/** @type {import("webpack").Configuration} */
module.exports = {
  // 本番環境の場合modeをdevelopmentからproductionへと書き換えてください
  mode: "production",
  devtool: "source-map",
  entry: {
    index: "./src/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: `./js/[name].js`,
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },


  module: {
    rules: [
      {
        // javascriptのバンドル及びES6とReactのコンパイル
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
      // scssファイルのコンパイル
      {
        test: /\.scss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  require('autoprefixer')({ grid: true }),
                ],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      // 画像ファイルの取り込み、現状では圧縮は別ツールを使用
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        generator: {
          filename: `./image/[name].[contenthash][ext]`,
        },
        type: 'asset/resource',
      },

      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    //複数のCSSを生成したい場合styleの部分を[name]へ変更すると対応するjavascriptファイルの名前へ変更されます
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    //webpack-watched-glob-entries-pluginは現在のnodejsのバージョンでは使えないため適宜手動で追加してください
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      inject: "body",
      chunks: ["index"],
    }),
  ]
}
