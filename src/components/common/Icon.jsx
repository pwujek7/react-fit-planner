import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled.svg`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = ({ icon, size, color, viewBox, onClick }) => (
  <StyledIcon onClick={onClick} width={size} height="100%" viewBox={viewBox ? `${viewBox}` : '0 0 32 32'}>
    <path d={icon} fill={color}></path>
  </StyledIcon>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  viewBox: PropTypes.string,
  onClick: PropTypes.func
};

export default Icon;
