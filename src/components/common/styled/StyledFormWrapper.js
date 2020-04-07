import styled from 'styled-components';

const StyledFormWrapper = styled.div`
  border: 2px solid ${({ theme }) => theme.color.darkBlue};
  background-color: ${({ theme }) => theme.color.white};

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 280px;
    padding: 30px 20px 40px 20px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    padding: 30px 20px 20px 20px;
  }
`;

export default StyledFormWrapper;
