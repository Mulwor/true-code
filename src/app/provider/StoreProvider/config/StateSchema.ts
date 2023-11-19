import { CounterScheme } from 'enteties/Counter';
import { UserSchema } from 'enteties/User';

export interface StateShema {
  counter: CounterScheme;
  user: UserSchema;
}
