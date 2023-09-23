type Mods = Record<string, boolean | string>

// ! Принимает: главный класс, принимает объект с модами (объект как ключ идет название
// ! класса, а как значение какой-то булевый флаг). Если класс равен true, то добавляем, если нет
// * то удаляем. Например: className("remove-btn", {
// *  hovered: true,
// *   selectable: true,
// *   red: true
// *  }) => 'remove-btn hovered selectable
export function classNames(cls: string, mods?: Mods, additional?: string[]): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ');
}
