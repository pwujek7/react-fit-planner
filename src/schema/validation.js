import * as Yup from 'yup';

export const emailValidation = Yup.string()
  .email('Invalid email address')
  .required('Required');

export const newEmailValidation = Yup.object({
  email: emailValidation
});

export const passwordValidation = Yup.string()
  .required('Required');

export const newPasswordValidation = Yup.object({
  password: passwordValidation,
});

export const loginValidation = Yup.object({
  email: emailValidation,
  password: passwordValidation,
});

export const registerValidation = Yup.object({
  username: Yup.string()
    .max(20, 'Must be no more than 20 characters')
    .required('Required'),
  email: emailValidation,
  password: passwordValidation,
});
