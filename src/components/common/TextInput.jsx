import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledErrorMessage from './styled/StyledErrorMessage';

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  position: relative;

  & > input {
    color: ${({ theme }) => theme.color.darkBlue};
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.lightGray};
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    padding: 10px;
    margin: 10px 0 0 0;
    position: relative;
  }

  & > input:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.gray};
  }

  & > input:focus ~ label,
      input:not(:placeholder-shown) ~ label {
    top: 7px;
    left: 15px;
    color: ${({ theme }) => theme.color.gray};
  }

  & > label {
    color: ${({ theme }) => theme.color.lightGray};
    background-color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.font.size.xs};
    padding: 0 4px;
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-20%);
    z-index: 10;
    transition: all .25s ease-in-out;
  }
`;

const StyledInputErrorMessage = styled(StyledErrorMessage)`
  margin: 3px 0 5px 10px;

  &:empty {
    margin: 0 0 10px 0;
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
  const renderError = validate
    && (
      <StyledInputErrorMessage>
        <ErrorMessage name={name} />
      </StyledInputErrorMessage>
    );

  return (
    <>
      <StyledInputContainer>
        <Field id={id} name={name} type={type} placeholder=" " />
        {renderLabel}
      </StyledInputContainer>
      {renderError}
    </>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.bool
};

export default TextInput;
