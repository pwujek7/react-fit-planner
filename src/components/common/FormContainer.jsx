import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const FormContainer = ({
  initialValues,
  schema,
  submitFunction,
  children
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => {
        submitFunction(values);
      }}
    >
      {
        children()
      }
    </Formik>
  );
};

FormContainer.propTypes = {
  initialValues: PropTypes.object.isRequired,
  schema: PropTypes.object.isRequired,
  submitFunction: PropTypes.func.isRequired,
  children: PropTypes.elementType.isRequired
};

export default FormContainer;
