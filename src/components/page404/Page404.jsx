import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import StyledAbsoluteContainer from '../common/styled/StyledAbsoluteContainer';
import StyledText from '../common/styled/StyledText';
import StyledLink from '../common/styled/StyledLink';

import {
  COLOR, SIZE, WEIGHT, FLEXCOLUMN
} from '../../constants/styles';

const StyledPage404Container = styled(StyledAbsoluteContainer)`
  ${FLEXCOLUMN};
  justify-content: center;
  align-items: center;
`;

const Page404 = () => {
  const location = useLocation();

  return (
    <StyledPage404Container>
      <StyledText
        fontColor={COLOR.GRAY}
        fontSize={SIZE.M}
        fontWeight={WEIGHT.NORMAL}
      >
        The page {location.pathname} you were looking could not be found!
      </StyledText>
      <StyledText
        fontColor={COLOR.LIGHTGRAY}
        fontSize={SIZE.M}
        fontWeight={WEIGHT.NORMAL}
      >
        Try the <StyledLink to="/">home page.</StyledLink>
      </StyledText>
    </StyledPage404Container>
  );
};

export default Page404;
