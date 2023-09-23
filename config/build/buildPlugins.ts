import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),

    // * C помощью данного плагина в само приложения можно прокидывать
    // * глоабальные переменный
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),

    // * Данный плагин нужен для того, чтобы обновить в браузере без перезагрузки страницы
    new webpack.HotModuleReplacementPlugin(),
  ];
}
