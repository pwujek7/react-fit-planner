import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;

  & > input {
  }

  & > label {
  }
`;

const CheckBoxInput = ({
  id, name, label, value
}) => {
  const renderLabel = label && <label htmlFor={name}>{label}</label>;

  return (
    <StyledInputContainer>
      {renderLabel}
      <Field id={id} name={name} checked={value} type="checkbox" />
    </StyledInputContainer>
  );
};

CheckBoxInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  label: PropTypes.string,
};

export default CheckBoxInput;
