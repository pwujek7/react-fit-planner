import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.darkBlue};
  border: 1px solid ${({ theme }) => theme.color.darkBlue};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding: 10px 30px;
  transition: all .25s ease-in-out;

  &:hover,
  &:active {
    color: ${({ theme }) => theme.color.darkBlue};
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.darkBlue};
  }
`;

export default StyledButton;
