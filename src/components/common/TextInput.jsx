import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;

  & > input {
  }

  & > label {
  }
`;

const TextInput = ({
  id,
  name,
  type,
  label,
  validate
}) => {
  const renderLabel = label && <label htmlFor={name}>{label}</label>;
  const renderError = validate && <ErrorMessage name={name} />;

  return (
    <StyledInputContainer>
      {renderLabel}
      <Field id={id} name={name} type={type} />
      {renderError}
    </StyledInputContainer>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  validate: PropTypes.bool
};

export default TextInput;
