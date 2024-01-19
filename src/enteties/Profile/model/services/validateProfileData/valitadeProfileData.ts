import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }

  const {
    first,
    lastname,
    age,
    country,
  } = profile;

  const errors: ValidateProfileError[] = [];

  // Если у нас отсутсвуют имя и фамилия, то верни ошибку
  if (!first || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  // Если у нас указан возраст и этот возраст не является целочисленным, то
  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  return errors;
};
