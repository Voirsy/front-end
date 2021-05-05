import * as Yup from 'yup';

export const EmailValidation = Yup.string().email('Invalid email!').required('Required!');
export const NameValidation = Yup.string().required('Required!');
export const PasswordValidation = Yup.string()
  .min(8, 'Min 8 characters!')
  .max(32, 'Max 32 characters!')
  .required('Required!');
