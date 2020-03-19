import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  margin: 0 0 10px 0;
`;

const StyledInputLabel = styled.label`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`;

const TextInput = ({
  name,
  type,
  label,
  validate
}) => {
  return (
    <StyledInputContainer>
      <StyledInputLabel htmlFor={name}>
        {label}
        <Field name={name} id={name} type={type} />
        {
          validate
          && <ErrorMessage name={name} />
        }
      </StyledInputLabel>
    </StyledInputContainer>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  validate: PropTypes.bool
};

export default TextInput;
