import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
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
import Tabs from '../common/tabs/Tabs';
import Icon from '../common/Icon';

import { updateEmail, updatePassword } from '../../actions/authActions';
import { newEmailValidation, newPasswordValidation } from '../../schema/validation';
import { ICONS, COLORS } from '../../constants/icons';

const StyledSettingsHeading = styled(StyledHeading)`
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
`;

const StyledSettingsButton = styled(StyledButton)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    position: absolute;
    bottom: -20px;
    right: -20px;
  }
`;

const Settings = ({ newEmail, newPassword }) => {
  const auth = useSelector(selectAuth);
  const {
    updateEmailError,
    updateEmailErrorMessage,
    updatePasswordError,
    updatePasswordErrorMessage
  } = auth;

  return (
    <StyledAbsoluteContainer>
      <StyledFormWrapper>
        <StyledSettingsHeading>
          <Icon icon={ICONS.COG} size="24" color={COLORS.DARKBLUE} />
          Settings
        </StyledSettingsHeading>
        <Tabs>
          <div label="email">
            <FormContainer
              initialValues={{ email: '' }}
              schema={newEmailValidation}
              submitFunction={newEmail}
            >
              {
                () => (
                  <>
                    <Form>
                      <TextInput id="emailID" name="email" type="text" label="New e-mail:" validate />
                      <StyledSettingsButton type="submit">Update</StyledSettingsButton>
                    </Form>
                    {
                      updateEmailError
                        && <StyledErrorMessage>{updateEmailErrorMessage}</StyledErrorMessage>
                    }
                  </>
                )
              }
            </FormContainer>
          </div>
          <div label="password">
            <FormContainer
              initialValues={{ password: '' }}
              schema={newPasswordValidation}
              submitFunction={newPassword}
            >
              {
                () => (
                  <>
                    <Form>
                      <TextInput id="passwordID" name="password" type="password" label="New password:" validate />
                      <StyledSettingsButton type="submit">Update</StyledSettingsButton>
                    </Form>
                    {
                      updatePasswordError
                        && <StyledErrorMessage>{updatePasswordErrorMessage}</StyledErrorMessage>
                    }
                  </>
                )
              }
            </FormContainer>
          </div>
        </Tabs>
      </StyledFormWrapper>
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
