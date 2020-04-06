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

const StyledLoginContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.color.darkBlue};
  background-color: ${({ theme }) => theme.color.white};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 280px;
    padding: 30px 20px 40px 20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 30px 20px 20px 20px;
  }
`;

const StyledLoginHeading = styled(StyledHeading)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 0 10px;
  position: absolute;

  & > svg {
    margin: 0 5px 0 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    top: -10px;
    left: 20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    top: -13px;
    left: 150px;
  }
`;

const StyledLoginButton = styled(StyledButton)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    position: absolute;
    bottom: -20px;
    right: -20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    position: relative;
    bottom: 0;
    right: 0;
    margin: 15px 0 0 0;
  }
`;

const StyledLoginPanel = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    display: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    display: block;
    width: 280px;
    height: 320px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(45, 49, 77, 0.85) 100%),
      url('src/assets/images/img-login.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid ${({ theme }) => theme.color.darkBlue};
    position: absolute;
    top: 50%;
    left: -140px;
    transform: translateY(-50%);
    z-index: -10;
  }
`;

const Login = ({ login }) => {
  const auth = useSelector(selectAuth);
  const { loginError, loginErrorMessage } = auth;

  return (
    <StyledAbsoluteContainer>
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
      <StyledLoginPanel />
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
