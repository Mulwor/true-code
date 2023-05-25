import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
  // * For CSS, SASS, SCSS
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Create style node from JS-strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module")),
            localIdentName: isDev 
              ? '[path][name]__[local]--[hash:base64:5]' 
              : '[hash:base64:8]'
          },
        },
      },
      "sass-loader",
    ],
  }

  // * For TypeScript
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  return [typescriptLoader, cssLoader]
}
