import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { RouteProps } from "react-router-dom"

// * Enum (перечисления) - позволяет лучше структурировать однотипные значения на элементы
// * Мы можем получить данные с объекта по ключе (.key) либо по значению (.values). Он очень 
// * удобен в обращении
export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

// * Record создает тип, который представляют объекты с заданными ключами и значениями. 
// * Она позволяет определить тип объекта, где все ключи имеют один и тот же тип значения.
// *  { [key: string]: number }
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
}


export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
} 