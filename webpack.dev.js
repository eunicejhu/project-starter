const path = require("path");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.js");

module.exports = merge(base, {
  mode: "development",
  devServer: {
    static: [
      path.resolve(__dirname, "public"),
      path.resolve(__dirname, "dist"),
    ],
    host: "localhost",
    port: "3000",
    open: true,
  },
});
