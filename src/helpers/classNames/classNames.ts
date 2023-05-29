// ! Record обозначает что в качестве ключа будет использоватся string, а в качестве значение либо
// ! boolean либо string
type Mods = Record<string, boolean | string>

// * const obj: Mods = {
// *   "hovered": false,
// * }




// ! Принимает: главный класс, принимает объект с модами (объект как ключ идет название 
// ! класса, а как значение какой-то булевый флаг). Если класс равен true, то добавляем, если нет
// * то удаляем. Например: className("remove-btn", {
// *  hovered: true, 
// *   selectable: true, 
// *   red: true
// *  }) => 'remove-btn hovered selectable

export function classNames(cls: string, mods: Mods, additional: string[]): string {
    // ! Первый аргументом передаем главный класс, затем разварачиваем additional
    return [
        cls,
        ...additional,
        // ! C помощью данной значение мы можем получить как ключи так и значение
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className]) => className)
    ].join(' ');
}

// ! Это функция предназачена для того, чтобы удобно комбинировать какие-то классы, если они 
// ! навешиваются по какому-то условию
