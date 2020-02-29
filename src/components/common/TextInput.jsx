import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

const TextInput = ({
  name,
  type,
  label,
  validate
}) => {
  return (
    <>
      <label htmlFor={name}>
        {label}
        <Field name={name} id={name} type={type} />
        {
          validate
          && <ErrorMessage name={name} />
        }
      </label>
    </>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validate: PropTypes.bool
};

export default TextInput;
