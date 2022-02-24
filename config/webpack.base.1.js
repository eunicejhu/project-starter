const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// case: add styles loaders
const rootDir = process.cwd();
module.exports = {
  entry: {
    indexA: path.resolve(rootDir, "src/index.js"),
    indexB: path.resolve(rootDir, "src/indexB.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[hash].bundle.js",
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: { injectType: "linkTag" },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, "public/index.html"),
      filename: "index.html",
      chunks: ["indexA"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, "public/index.html"),
      filename: "indexB.html",
      chunks: ["indexB"],
    }),
  ],
};
