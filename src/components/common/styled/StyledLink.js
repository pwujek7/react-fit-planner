import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.color.darkBlue};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`;

export default StyledLink;
