import webpack from 'webpack';
import { resolve } from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  context: resolve(__dirname),
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json"
            },
          },
        ],
      },
    ],
  },
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json',
      }),
    ],
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  devtool: "inline-source-map",
};

export default config;
