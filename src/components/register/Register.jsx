import React from 'react';
import {
  connect,
  useSelector
} from 'react-redux';
import {
  Formik,
  Field,
  Form,
  ErrorMessage
} from 'formik';
import PropTypes from 'prop-types';

import { signUp } from '../../actions/authActions';
import { registerValidation } from '../../schema/validation';

const Register = ({ register }) => {
  const auth = useSelector(state => state.auth);
  const { signupError, signupErrorMessage } = auth;

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: ''
      }}
      validationSchema={registerValidation}
      onSubmit={(values) => {
        register({ ...values });
      }}
    >
      <>
        <Form>
          <span>Register form</span>
          <br />
          <label htmlFor="username">username: </label>
          <Field name="username" type="text" />
          <ErrorMessage name="username" />
          <br />
          <label htmlFor="email">e-mail: </label>
          <Field name="email" type="text" />
          <ErrorMessage name="email" />
          <br />
          <label htmlFor="password">password: </label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
          <br />
          <button type="submit">Register</button>
        </Form>
        {
          signupError && <p>{signupErrorMessage}</p>
        }
      </>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => dispatch(signUp(credentials))
  };
};

Register.propTypes = {
  register: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Register);
