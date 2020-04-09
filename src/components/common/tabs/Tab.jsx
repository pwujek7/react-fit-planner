import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabItem = styled.li`
  color: ${({ theme, isActiveTab }) => (
    isActiveTab ? theme.color.darkBlue : theme.color.lightGray
  )};
  font-size: ${({ theme, isActiveTab }) => (
    isActiveTab ? theme.font.size.m : theme.font.size.s
  )};
  font-weight: ${({ theme, isActiveTab }) => (
    isActiveTab ? theme.font.weight.medium : theme.font.weight.normal
  )};
  border-right: 1px solid ${({ theme }) => theme.color.veryLightGray};
  padding: 0 10px 0 0;
  cursor: pointer;

  &:not(:nth-of-type(1)) {
    padding: 0 10px;
  }

  &:last-of-type {
    border-right: none;
  }
`;

const Tab = ({ activeTab, label, onClick }) => {
  const handleClick = () => {
    onClick(label);
  };
  const isActiveTab = activeTab === label;

  return (
    <StyledTabItem onClick={handleClick} isActiveTab={isActiveTab}>
      {label}
    </StyledTabItem>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
