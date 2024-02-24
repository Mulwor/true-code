export function getQueryParams(params: OptionalRecord<string, string>) {
  // Cоздает и возвращает новый параметр, который предоставляет информацию
  // о текущем URL страницы и позволяет работать с ним
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([name, value]) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
}

// Функция добавления параметров в строки запроса URL
export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, '', getQueryParams(params));
}
