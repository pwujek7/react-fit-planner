import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledAbsoluteContainer from './styled/StyledAbsoluteContainer';
import StyledText from './styled/StyledText';

import { COLOR, SIZE, WEIGHT } from '../../constants/styles';

const StyledErrorBoundaryContainer = styled(StyledAbsoluteContainer)`
  width: 260px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;
class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError
      ? (
        <StyledErrorBoundaryContainer>
          <StyledText
            fontColor={COLOR.DARKBLUE}
            fontSize={SIZE.XL}
            fontWeight={WEIGHT.MEDIUM}
          >
            Something went wrong.
          </StyledText>
          <StyledText
            fontColor={COLOR.GRAY}
            fontSize={SIZE.M}
            fontWeight={WEIGHT.NORMAL}
          >
            We are currently working on this.
          </StyledText>
          <StyledText
            fontColor={COLOR.LIGHTGRAY}
            fontSize={SIZE.S}
            fontWeight={WEIGHT.NORMAL}
          >
            Please try again later...
          </StyledText>
        </StyledErrorBoundaryContainer>
      )
      : children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node
};

export default ErrorBoundary;
