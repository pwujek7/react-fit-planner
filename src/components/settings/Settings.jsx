import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  Formik,
  Field,
  Form,
  ErrorMessage
} from 'formik';

import { updateEmail } from '../../actions/authActions';
import { emailValidation } from '../../schema/validation';

const Settings = ({ newEmail }) => {
  const [showEmail, setShowEmail] = useState(false);
  const auth = useSelector(state => state.auth);
  const {
    user: { email },
    updateEmailError,
    updateEmailErrorMessage
  } = auth;

  const handleShowEmail = () => {
    setShowEmail(!showEmail);
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    newEmail: (email) => dispatch(updateEmail(email))
  };
};

export default connect(null, mapDispatchToProps)(Settings);
