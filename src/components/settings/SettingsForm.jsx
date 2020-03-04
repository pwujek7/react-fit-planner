import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const SettingsForm = ({
  initialValues,
  schema,
  updateFunction,
  children
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        updateFunction(values);
      }}
    >
      {
        children()
      }
    </Formik>
  );
};

SettingsForm.propTypes = {
  initialValues: PropTypes.object.isRequired,
  schema: PropTypes.object.isRequired,
  updateFunction: PropTypes.func.isRequired,
  children: PropTypes.elementType.isRequired
};

export default SettingsForm;
