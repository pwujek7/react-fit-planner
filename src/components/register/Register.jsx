import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectAuth } from '../../selectors/selectors';

import TextInput from '../common/TextInput';
import FormContainer from '../common/FormContainer';
import StyledAbsoluteContainer from '../common/styled/StyledAbsoluteContainer';
import StyledFormWrapper from '../common/styled/StyledFormWrapper';
import StyledHeading from '../common/styled/StyledHeading';
import StyledButton from '../common/styled/StyledButton';
import StyledErrorMessage from '../common/styled/StyledErrorMessage';
import StyledFormImagePanel from '../common/styled/StyledFormImagePanel';
import Icon from '../common/Icon';

import { signUp } from '../../actions/authActions';
import { registerValidation } from '../../schema/validation';
import { ICONS } from '../../constants/icons';
import { COLOR } from '../../constants/styles';

const StyledRegisterHeading = styled(StyledHeading)`
  background-color: ${({ theme }) => theme.color.white};
  padding: 0 10px;
  position: absolute;

  & > svg {
    margin: 0 5px 0 0;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    top: -12px;
    left: 20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    top: -15px;
    left: 120px;
    width: 140px;
  }
`;

const StyledRegisterButton = styled(StyledButton)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    position: absolute;
    bottom: -20px;
    right: -20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    position: relative;
    bottom: 0;
    right: 0;
    margin: 15px 0;
  }
`;

const StyledRegisterImagePanel = styled(StyledFormImagePanel)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    height: 380px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 60%, rgba(45, 49, 77, 0.85) 100%),
      url('src/assets/images/img-register.jpg') 60% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    left: -200px;
  }
`;

const Register = ({ register }) => {
  const auth = useSelector(selectAuth);
  const { signupError, signupErrorMessage, isAuthenticated } = auth;
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  return (
    <StyledAbsoluteContainer>
      <StyledFormWrapper>
        <StyledRegisterHeading>
          <Icon icon={ICONS.PLUS} size="24" color={COLOR.DARKBLUE} />
          Register
        </StyledRegisterHeading>
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
                  <StyledRegisterButton type="submit">Register</StyledRegisterButton>
                </Form>
                {
                  signupError
                    && <StyledErrorMessage>{signupErrorMessage}</StyledErrorMessage>
                }
              </>
            )
          }
        </FormContainer>
      </StyledFormWrapper>
      <StyledRegisterImagePanel />
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
