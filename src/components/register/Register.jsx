import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Form } from 'formik';
import PropTypes from 'prop-types';

import { selectAuth } from '../../selectors/selectors';

import TextInput from '../common/TextInput';
import FormContainer from '../common/FormContainer';
import StyledAbsoluteContainer from '../common/styled/StyledAbsoluteContainer';

import { signUp } from '../../actions/authActions';
import { registerValidation } from '../../schema/validation';

const Register = ({ register }) => {
  const auth = useSelector(selectAuth);
  const { signupError, signupErrorMessage } = auth;

  return (
    <StyledAbsoluteContainer>
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
                <TextInput id="usernameID" name="username" type="text" label="username:" validate />
                <TextInput id="emailID" name="email" type="text" label="e-mail:" validate />
                <TextInput id="passwordID" name="password" type="password" label="password:" validate />
                <button type="submit">Register</button>
              </Form>
              {
                signupError && <p>{signupErrorMessage}</p>
              }
            </>
          )
        }
      </FormContainer>
    </StyledAbsoluteContainer>
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
