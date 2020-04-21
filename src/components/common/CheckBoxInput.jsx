import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;

  & > input[type="checkbox"] {
    width: 44px;
    height: 22px;
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.lightGray};
    border-radius: 10px;
    outline: none;
    position: relative;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    transition: all .25s ease-in-out;

    &::before {
      content: '';
      width: 18px;
      height: 18px;
      background-color: ${({ theme }) => theme.color.lightGray};
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 2px;
      transform: translateY(-50%);
      transition: all .25s ease-in-out;
    }

    &:hover {
      border: 1px solid ${({ theme }) => theme.color.gray};
      &::before {
        background-color: ${({ theme }) => theme.color.gray};
      }
    }

    &:checked {
      border: 1px solid ${({ theme }) => theme.color.darkBlue};
      &::before {
        background-color: ${({ theme }) => theme.color.darkBlue};
        left: 22px;
      }
    }
  }

  & > label {
    font-weight: ${({ theme }) => theme.font.weight.normal};
    line-height: 22px;
    color: ${({ theme }) => theme.color.gray};
    margin: 0 5px 0 0;
    cursor: pointer;

    @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
      font-size: ${({ theme }) => theme.font.size.s};
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoint.m}) {
      font-size: ${({ theme }) => theme.font.size.m};
    }
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
