import { lazy } from "react"

// Функция React.lazy позволяет рендерить динамический импорт как обычный компонент.
// Она автоматически загрузит бандл, содержащий OtherComponent, когда этот компонент будет впервые отрендерен.
// React.lazy принимает функцию, которая должна вызвать динамический import(). Результатом возвращённого Promise 
// является модуль, который экспортирует по умолчанию React-компонент (export default).
export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import("./AboutPage")), 1500)
}));