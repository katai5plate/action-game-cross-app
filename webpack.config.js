const path = require("path");
const { DefinePlugin } = require("webpack");
const { openYAML } = require("./scripts/utils");

const conf = openYAML("./project.config.yml");

/** @type {import("webpack").Configuration} */
module.exports = {
  devtool: "source-map",
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./www"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { url: false },
          },
        ],
      },
      {
        test: /\.(ico|svg|jpe?g|png|bmp|gif|mp3|ogg|wav)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"],
  },
  target: ["web", "es5"],
  plugins: [
    new DefinePlugin({
      "window.WEBPACK_VARIABLES": JSON.stringify({
        meta: {
          title: conf.meta.title,
        },
        engine: {
          width: conf.engine.width,
          height: conf.engine.height,
          resize: conf.engine.resize,
        },
      }),
    }),
  ],
};
