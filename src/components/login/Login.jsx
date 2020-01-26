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

import { signIn } from '../../actions/authActions';
import { loginValidation } from '../../schema/validation';

const Login = ({ login }) => {
  const auth = useSelector(state => state.auth);
  const { loginError, loginErrorMessage } = auth;

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={loginValidation}
      onSubmit={(values) => {
        login({ ...values });
      }}
    >
      <>
        <Form>
          <span>Login form</span>
          <br />
          <label htmlFor="email">e-mail: </label>
          <Field name="email" type="text" />
          <ErrorMessage name="email" />
          <br />
          <label htmlFor="password">password: </label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" />
          <br />
          <button type="submit">Login</button>
        </Form>
        {
          loginError && <span>{loginErrorMessage}</span>
        }
      </>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credentials) => dispatch(signIn(credentials))
  };
};

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Login);
