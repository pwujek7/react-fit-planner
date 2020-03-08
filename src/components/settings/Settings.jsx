import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Form } from 'formik';
import PropTypes from 'prop-types';

import { selectAuth } from '../../selectors/selectors';

import TextInput from '../common/TextInput';
import SettingsForm from './SettingsForm';

import { updateEmail, updatePassword } from '../../actions/authActions';
import { newEmailValidation, newPasswordValidation } from '../../schema/validation';

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
    <div>
      <p>Profile</p>
      <div>
        <span>e-mail: {email}</span><button type="button" onClick={handleShowEmail}>update</button>
        {
          showEmail
          && (
            <SettingsForm
              initialValues={{ email: '' }}
              schema={newEmailValidation}
              updateFunction={newEmail}
            >
              {
                () => (
                  <Form>
                    <br />
                    <TextInput name="email" type="text" label="New e-mail:" validate />
                    <br />
                    <button type="submit">Change</button>
                  </Form>
                )
              }
            </SettingsForm>
          )
        }
        {
          updateEmailError && <span>{updateEmailErrorMessage}</span>
        }
      </div>
      <div>
        <span>password: *****</span><button type="button" onClick={handleShowPassword}>update</button>
        {
          showPassword
          && (
            <SettingsForm
              initialValues={{ password: '' }}
              schema={newPasswordValidation}
              updateFunction={newPassword}
            >
              {
                () => (
                  <Form>
                    <br />
                    <TextInput name="password" type="password" label="New password:" validate />
                    <br />
                    <button type="submit">Change</button>
                  </Form>
                )
              }
            </SettingsForm>
          )
        }
        {
          updatePasswordError && <span>{updatePasswordErrorMessage}</span>
        }
      </div>
    </div>
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
