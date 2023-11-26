export interface LoginSchema {
  // Пользователь ввел данные
  username: string;
  password: string;
  // Когда мы нажали на кнопку войти, идет запрос на сервер
  isLoading: boolean;
  // Ошибка
  error?: string;
}
