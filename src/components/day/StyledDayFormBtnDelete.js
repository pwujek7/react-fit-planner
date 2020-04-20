import styled from 'styled-components';

import StyledButton from '../common/styled/StyledButton';

const StyledDayFormBtnDelete = styled(StyledButton)`
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  padding: 0;
  margin: 5px 0 0 0;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.white};
    border: none;

    & > svg path {
      fill: ${({ theme }) => theme.color.red};
    }
  }
`;

export default StyledDayFormBtnDelete;
