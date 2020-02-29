import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import TextInput from '../common/TextInput';

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
          <TextInput name="email" type="text" label="e-mail:" validate />
          <br />
          <TextInput name="password" type="password" label="password:" validate />
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
