import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = ({ icon, size, color }) => (
  <StyledIcon width={size} height="100%" viewBox="0 0 32 32">
    <path d={icon} fill={color}></path>
  </StyledIcon>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default Icon;
