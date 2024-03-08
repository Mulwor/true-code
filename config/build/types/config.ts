export type BuildMode = 'production' | 'development'
export type BuildPaths = {
  entry: string
  build: string
  html: string
  src: string
  // Указываем путь до файлов с переводами
  locales: string;
  // Куда эти переводы необходим перемещать
  buildLocales: string;
}

export interface BuildEnv {
  mode: BuildMode
  port: number
  apiUrl: string
}

export interface BuildOptions {
  mode: BuildMode
  paths: BuildPaths
  isDev: boolean
  port: number
  apiUrl: string

  project: 'storybook' | 'frontend' | 'jest'
}
