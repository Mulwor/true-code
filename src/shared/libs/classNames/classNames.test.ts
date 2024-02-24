import { classNames } from 'shared/libs/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with addition class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with addition class', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames('someClass', {
      hovered: true, scrollable: true,
    }, ['class1', 'class2'])).toBe(expected);
  });

  test('with addition class return false - success', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', {
      hovered: true, scrollable: false,
    }, ['class1', 'class2'])).toBe(expected);
  });

  test('with addition class return false - error', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames('someClass', {
      hovered: true, scrollable: false,
    }, ['class1', 'class2'])).not.toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', {
      hovered: true, scrollable: false,
    }, ['class1', 'class2'])).toBe(expected);
  });
});
