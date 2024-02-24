import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
  test('Проврека с приходом одного параметра', () => {
    const params = getQueryParams({
      test: 'value',
    });
    expect(params).toBe('?test=value');
  });

  test('Проврека с приходом более 2 параметров', () => {
    const params = getQueryParams({
      test: 'value',
      second: '2',
    });
    expect(params).toBe('?test=value&second=2');
  });

  test('Получаем undefined', () => {
    const params = getQueryParams({
      test: 'value',
      second: undefined,
    });
    expect(params).toBe('?test=value');
  });
});
