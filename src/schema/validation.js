import * as Yup from 'yup';

export const loginValidation = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});

export const registerValidation = Yup.object({
  username: Yup.string()
    .max(20, 'Must be no more than 20 characters')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Required'),
});
