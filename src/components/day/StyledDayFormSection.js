import styled from 'styled-components';

const StyledDayFormSection = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    margin: 0 0 20px 0;
  }
`;

export default StyledDayFormSection;
