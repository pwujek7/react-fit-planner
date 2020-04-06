import styled from 'styled-components';

const StyledHeading = styled.h1`
  display: inline-block;
  color: ${({ theme }) => theme.color.darkBlue};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: ${({ theme }) => theme.font.size.xl};
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.l}) {
    font-size: ${({ theme }) => theme.font.size.xxl};
  }
`;

export default StyledHeading;
