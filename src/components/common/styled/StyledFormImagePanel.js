import styled from 'styled-components';

const StyledFormImagePanel = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.s}) {
    display: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoint.xl}) {
    display: block;
    width: 300px;
    border: 2px solid ${({ theme }) => theme.color.darkBlue};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: -10;
  }
`;

export default StyledFormImagePanel;
