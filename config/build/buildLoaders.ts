import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"

export function buildLoaders(): webpack.RuleSetRule[] {

  // * For CSS, SASS, SCSS
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,         // Create style node from JS-strings
      "css-loader",           // Translate CSS into commonJS
      "sass-loader",          // Compiles Sass to CSS
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
