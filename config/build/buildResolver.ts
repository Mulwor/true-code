import { BuildOptions } from './types/config';
import { ResolveOptions } from "webpack"

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    // Абсолютные пути в приоритете
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    // Для каждого модуля главным файлом будет индекс
    mainFiles: ['index'],
    alias: {}
  }
}
