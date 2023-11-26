import { CounterScheme } from 'enteties/Counter';
import { UserSchema } from 'enteties/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateShema {
  counter: CounterScheme;
  user: UserSchema;
  loginForm?: LoginSchema;
}
