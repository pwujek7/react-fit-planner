import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from './Icon';
import { ICONS } from '../../constants/icons';
import { COLOR } from '../../constants/styles';

const StyledLogoText = styled.span`
  position: absolute;
  bottom: 3px;
  left: 28px;
  color: ${({ theme }) => theme.color.darkBlue};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  padding: 0 2px 0 2px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.white};
`;

const Logo = ({ isTextVisible }) => {
  const logoText = !isTextVisible && <StyledLogoText>fitPlanner</StyledLogoText>;

  return (
    <>
      <Icon icon={ICONS.LOGO} size="56" color={COLOR.DARKBLUE} viewBox="0 0 141.239 141.238" />
      { logoText }
    </>
  );
};

Logo.propTypes = {
  isTextVisible: PropTypes.bool.isRequired,
};

export default Logo;
