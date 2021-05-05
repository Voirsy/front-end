import * as Yup from 'yup';
import moment from 'moment';
import { EmailValidation, NameValidation, PasswordValidation } from './global';

export const EditProfileSchema = Yup.object().shape({
  email: EmailValidation,
  fullname: NameValidation,
  birthdate: Yup.string().test(
    'is-date',
    'Invalid date',
    (value) =>
      moment(value, 'DD-MM-YYYY', true).isValid() &&
      moment(value, 'DD-MM-YYYY', true).isBefore(moment())
  ),
  phonenumber: Yup.string().matches(/\d{3}-\d{3}-\d{3}/g, 'Invalid phone number!'),
});

export const ChangePasswordSchema = Yup.object().shape({
  currentPassword: PasswordValidation,
  newPassword: PasswordValidation.notOneOf(
    [Yup.ref('currentPassword')],
    "Passwords can't be same!"
  ),
});
