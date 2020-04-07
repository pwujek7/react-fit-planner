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

import { signUp } from '../../actions/authActions';
import { registerValidation } from '../../schema/validation';
import { ICONS, COLORS } from '../../constants/icons';

const StyledRegisterContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.color.darkBlue};
  background-color: ${({ theme }) => theme.color.white};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 280px;
    padding: 30px 20px 40px 20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    padding: 30px 20px 20px 20px;
  }
`;

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
    margin: 15px 0 0 0;
  }
`;

const StyledRegisterPanel = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    display: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    display: block;
    width: 280px;
    height: 360px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(45, 49, 77, 0.85) 100%),
      url('src/assets/images/img-register.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border: 2px solid ${({ theme }) => theme.color.darkBlue};
    position: absolute;
    top: 50%;
    left: -180px;
    transform: translateY(-50%);
    z-index: -10;
  }
`;

const Register = ({ register }) => {
  const auth = useSelector(selectAuth);
  const { signupError, signupErrorMessage } = auth;

  return (
    <StyledAbsoluteContainer>
      <StyledRegisterContainer>
        <StyledRegisterHeading>
          <Icon icon={ICONS.PLUS} size="24" color={COLORS.DARKBLUE} />
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
                  signupError && <p>{signupErrorMessage}</p>
                }
              </>
            )
          }
        </FormContainer>
      </StyledRegisterContainer>
      <StyledRegisterPanel />
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
