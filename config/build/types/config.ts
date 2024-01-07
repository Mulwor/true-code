export type BuildMode = 'production' | 'development'
export type BuildPaths = {
  entry: string
  build: string
  html: string
  src: string
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

  // Принимает значение сторибука, фронтенда и честа
  project: 'storybook' | 'frontend' | 'jest'
}
