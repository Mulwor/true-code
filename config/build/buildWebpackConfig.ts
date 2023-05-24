import webpack from "webpack"
import { BuildOptions } from "./types/config"
import path from "path"
import { buildLoaders } from "./buildLoaders"
import { buildPlugins } from "./buildPlugins"
import { buildResolvers } from "./buildResolver"
import { buildDevServer } from "./buildDevServer"

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    // ! 1. Когда у нас происходит компиляция в один файл, и вдруг в одном ловится ошибка, то
    // ! установив данный девтулс мы можем узнать где именно ошибка есть
    devtool: 'inline-source-map',
    // 6. 
    devServer: buildDevServer(options)
  }
}
