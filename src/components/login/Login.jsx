import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Form } from 'formik';
import PropTypes from 'prop-types';

import { selectAuth } from '../../selectors/selectors';

import TextInput from '../common/TextInput';
import FormContainer from '../common/FormContainer';
import StyledAbsoluteContainer from '../common/styled/StyledAbsoluteContainer';

import { signIn } from '../../actions/authActions';
import { loginValidation } from '../../schema/validation';

const Login = ({ login }) => {
  const auth = useSelector(selectAuth);
  const { loginError, loginErrorMessage } = auth;

  return (
    <StyledAbsoluteContainer>
      <span>Login form</span>
      <FormContainer
        initialValues={{
          email: '',
          password: ''
        }}
        schema={loginValidation}
        submitFunction={login}
      >
        {
          () => (
            <>
              <Form>
                <TextInput id="emailID" name="email" type="text" label="e-mail:" validate />
                <TextInput id="passwordID" name="password" type="password" label="password:" validate />
                <button type="submit">Login</button>
              </Form>
              {
                loginError && <span>{loginErrorMessage}</span>
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
    login: (credentials) => dispatch(signIn(credentials))
  };
};

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Login);
