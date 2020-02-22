import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  Formik,
  Field,
  Form,
  ErrorMessage
} from 'formik';
import PropTypes from 'prop-types';

import { updateEmail, updatePassword } from '../../actions/authActions';
import { emailValidation, passwordValidation } from '../../schema/validation';

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
              validationSchema={emailValidation}
              onSubmit={(values) => {
                newEmail(values.email);
              }}
            >
              <>
                <Form>
                  <br />
                  <label htmlFor="email">New e-mail: </label>
                  <Field name="email" type="text" />
                  <ErrorMessage name="email" />
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
              validationSchema={passwordValidation}
              onSubmit={(values) => {
                newPassword(values.password);
              }}
            >
              <>
                <Form>
                  <br />
                  <label htmlFor="password">New password: </label>
                  <Field name="password" type="password" />
                  <ErrorMessage name="password" />
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
