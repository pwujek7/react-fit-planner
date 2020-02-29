import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';

import TextInput from '../common/TextInput';

import { updateEmail, updatePassword } from '../../actions/authActions';
import { newEmailValidation, newPasswordValidation } from '../../schema/validation';

const Settings = ({ newEmail, newPassword }) => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const auth = useSelector(state => state.auth);
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
            <Formik
              initialValues={{
                email: ''
              }}
              validationSchema={newEmailValidation}
              onSubmit={(values) => {
                newEmail(values.email);
              }}
            >
              <>
                <Form>
                  <br />
                  <TextInput name="email" type="text" label="New e-mail:" validate />
                  <br />
                  <button type="submit">Change</button>
                </Form>
                {
                  updateEmailError && <span>{updateEmailErrorMessage}</span>
                }
              </>
            </Formik>
          )
        }
      </div>
      <div>
        <span>password: *****</span><button type="button" onClick={handleShowPassword}>update</button>
        {
          showPassword
          && (
            <Formik
              initialValues={{
                password: ''
              }}
              validationSchema={newPasswordValidation}
              onSubmit={(values) => {
                newPassword(values.password);
              }}
            >
              <>
                <Form>
                  <br />
                  <TextInput name="password" type="password" label="New password:" validate />
                  <br />
                  <button type="submit">Change</button>
                </Form>
                {
                  updatePasswordError && <span>{updatePasswordErrorMessage}</span>
                }
              </>
            </Formik>
          )
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
