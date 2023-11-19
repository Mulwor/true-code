export interface User {
  id: string;
  username: string;
}

// Если пользователь у нас undefined, то он не авторизован
export interface UserSchema {
  authData?: User;
}
