import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Form } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectAuth } from '../../selectors/selectors';

import TextInput from '../common/TextInput';
import FormContainer from '../common/FormContainer';
import StyledAbsoluteContainer from '../common/styled/StyledAbsoluteContainer';
import StyledHeading from '../common/styled/StyledHeading';
import StyledButton from '../common/styled/StyledButton';
import Icon from '../common/Icon';

import { signIn } from '../../actions/authActions';
import { loginValidation } from '../../schema/validation';
import { ICONS, COLORS } from '../../constants/icons';

const StyledLoginContainer = styled(StyledAbsoluteContainer)`
  border: 2px solid ${({ theme }) => theme.color.darkBlue};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 280px;
    padding: 30px 20px 40px 20px;
  }
`;

const StyledLoginHeading = styled(StyledHeading)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 0 10px;
  position: absolute;
  top: -12px;

  & > svg {
    margin: 0 5px 0 0;
  }
`;

const StyledLoginButton = styled(StyledButton)`
  position: absolute;
  bottom: -20px;
  right: -20px;
`;

const Login = ({ login }) => {
  const auth = useSelector(selectAuth);
  const { loginError, loginErrorMessage } = auth;

  return (
    <StyledLoginContainer>
      <StyledLoginHeading>
        <Icon icon={ICONS.ENTER} size="24" color={COLORS.DARKBLUE} />
        Login
      </StyledLoginHeading>
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
                <StyledLoginButton type="submit">Login</StyledLoginButton>
              </Form>
              {
                loginError && <span>{loginErrorMessage}</span>
              }
            </>
          )
        }
      </FormContainer>
    </StyledLoginContainer>
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
