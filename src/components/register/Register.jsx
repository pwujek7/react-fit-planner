import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Form } from 'formik';
import PropTypes from 'prop-types';

import { selectAuth } from '../../selectors/selectors';

import TextInput from '../common/TextInput';
import FormContainer from '../common/FormContainer';

import { signUp } from '../../actions/authActions';
import { registerValidation } from '../../schema/validation';

const Register = ({ register }) => {
  const auth = useSelector(selectAuth);
  const { signupError, signupErrorMessage } = auth;

  return (
    <div>
      <span>Register form</span>
      <FormContainer
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        schema={registerValidation}
        submitFunction={register}
      >
        {
          () => (
            <>
              <Form>
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
          )
        }
      </FormContainer>
    </div>
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
