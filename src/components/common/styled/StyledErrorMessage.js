import styled from 'styled-components';

const StyledErrorMessage = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-size: ${({ theme }) => theme.font.size.s};
`;

export default StyledErrorMessage;
