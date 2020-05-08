import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import { FLEXROW } from '../../constants/styles';

const bounceKeyFrames = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50px);
  }
`;

const bounceAnimation = css`${bounceKeyFrames}`;

const createCSSAnimation = () => {
  let styles = '';

  for (let i = 0; i <= 4; i += 1) {
    styles += `
      li:nth-child(${i}){
          animation-delay: ${100 * i}ms;
          animation-duration: .5s;
          animation-timing-function: ease;
          animation-delay: 0;
          animation-iteration-count: infinite;
          animation-direction: alternate; 
        }
      }
    `;
  }

  return css`${styles}`;
};

const StyledLoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255,255,255,0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 120;
`;

const StyledLoadingSpinnerList = styled.ul`
  ${FLEXROW};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${createCSSAnimation()};
`;

const StyledLoadingSpinnerListItem = styled.li`
  width: 15px;
  height: 15px;
  margin: 5px;
  list-style-type: none;
  transition: 0.25s all ease;
  animation: ${bounceAnimation}; 

  &:nth-of-type(1) {
    background-color: ${({ theme }) => theme.color.veryLightGray};
  }

  &:nth-of-type(2) {
    background-color: ${({ theme }) => theme.color.lightGray};
  }

  &:nth-of-type(3) {
    background-color: ${({ theme }) => theme.color.gray};
  }

  &:nth-of-type(4) {
    background-color: ${({ theme }) => theme.color.darkBlue};
  }
`;

const LoadingIndicator = () => (
  <StyledLoadingContainer>
    <StyledLoadingSpinnerList>
      <StyledLoadingSpinnerListItem />
      <StyledLoadingSpinnerListItem />
      <StyledLoadingSpinnerListItem />
      <StyledLoadingSpinnerListItem />
    </StyledLoadingSpinnerList>
  </StyledLoadingContainer>
);

export default LoadingIndicator;
