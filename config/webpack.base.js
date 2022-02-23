const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// case1: without babel loader
const rootDir = process.cwd();
module.exports = {
  entry: {
    index: path.resolve(rootDir, "src/index.js"),
    indexB: "./src/indexB.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]-[hash].bundle.js",
    publicPath: "",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, "public/index.html"),
      filename: "index.html",
      chunks: ["index", "indexB"],
    }),
  ],
};
