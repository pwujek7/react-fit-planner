import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Form } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { selectAuth } from '../../selectors/selectors';

import TextInput from '../common/TextInput';
import FormContainer from '../common/FormContainer';
import StyledAbsoluteContainer from '../common/styled/StyledAbsoluteContainer';

import { updateEmail, updatePassword } from '../../actions/authActions';
import { newEmailValidation, newPasswordValidation } from '../../schema/validation';

const StyledSettings = styled.div`
  display: grid;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: 1;
    grid-template-rows: 2;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1;
  }
`;

const Settings = ({ newEmail, newPassword }) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const auth = useSelector(selectAuth);
  const {
    user: { email },
    updateEmailError,
    updateEmailErrorMessage,
    updatePasswordError,
    updatePasswordErrorMessage
  } = auth;

  const handleShowEmail = () => {
    setShowEmail(!showEmail);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledAbsoluteContainer>
      <p>Profile</p>
      <StyledSettings>
        <div>
          <span>e-mail: {email}</span><button type="button" onClick={handleShowEmail}>update</button>
          {
            showEmail
            && (
              <FormContainer
                initialValues={{ email: '' }}
                schema={newEmailValidation}
                submitFunction={newEmail}
              >
                {
                  () => (
                    <>
                      <Form>
                        <br />
                        <TextInput id="emailID" name="email" type="text" label="New e-mail:" validate />
                        <br />
                        <button type="submit">Change</button>
                      </Form>
                      {
                        updateEmailError && <span>{updateEmailErrorMessage}</span>
                      }
                    </>
                  )
                }
              </FormContainer>
            )
          }
        </div>
        <div>
          <span>password: *****</span><button type="button" onClick={handleShowPassword}>update</button>
          {
            showPassword
            && (
              <FormContainer
                initialValues={{ password: '' }}
                schema={newPasswordValidation}
                submitFunction={newPassword}
              >
                {
                  () => (
                    <>
                      <Form>
                        <br />
                        <TextInput id="passwordID" name="password" type="password" label="New password:" validate />
                        <br />
                        <button type="submit">Change</button>
                      </Form>
                      {
                        updatePasswordError && <span>{updatePasswordErrorMessage}</span>
                      }
                    </>
                  )
                }
              </FormContainer>
            )
          }
        </div>
      </StyledSettings>
    </StyledAbsoluteContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    newEmail: (email) => dispatch(updateEmail(email)),
    newPassword: (password) => dispatch(updatePassword(password))
  };
};

Settings.propTypes = {
  newEmail: PropTypes.func.isRequired,
  newPassword: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Settings);
