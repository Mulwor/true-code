import { BuildOptions } from "./types/config"

import type { Configuration as DevServerConfiguration } from "webpack-dev-server"

// 2. 
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: true
  }
}
