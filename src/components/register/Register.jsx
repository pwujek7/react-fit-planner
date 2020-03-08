import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import { selectAuth } from '../../selectors/selectors';

import TextInput from '../common/TextInput';

import { signUp } from '../../actions/authActions';
import { registerValidation } from '../../schema/validation';

const Register = ({ register }) => {
  const auth = useSelector(selectAuth);
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
          <TextInput name="username" type="text" label="username:" validate />
          <br />
          <TextInput name="email" type="text" label="e-mail:" validate />
          <br />
          <TextInput name="password" type="password" label="password:" validate />
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
