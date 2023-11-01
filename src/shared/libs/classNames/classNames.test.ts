import { classNames } from 'shared/libs/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  // Тест на проверку того, что классы добавляются друг на друга
  test('with addition class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  // Тест на проверку того, что моды добавились. Они добавляются в самом конце
  test('with addition class', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames('someClass', {
      hovered: true, scrollable: true,
    }, ['class1', 'class2'])).toBe(expected);
  });

  // Тест на проверку того, что один из модов равен false. Его не должно быть при результате
  test('with addition class return false - success', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', {
      hovered: true, scrollable: false,
    }, ['class1', 'class2'])).toBe(expected);
  });

  // Неуспешно
  test('with addition class return false - error', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames('someClass', {
      hovered: true, scrollable: false,
    }, ['class1', 'class2'])).not.toBe(expected);
  });

  // Тест на проверку того, что один из модов будет равен undefined. Его также не должно
  // быть в результате
  test('with mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', {
      hovered: true, scrollable: undefined,
    }, ['class1', 'class2'])).toBe(expected);
  });
});
