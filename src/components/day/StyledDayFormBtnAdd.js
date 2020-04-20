import styled from 'styled-components';

import StyledButton from '../common/styled/StyledButton';

const StyledDayFormBtnAdd = styled(StyledButton)`
  background-color: ${({ theme }) => theme.color.lightGray};
  border: none;
  padding: 2px 5px 5px 5px;
  margin: 0 0 0 5px;

  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.color.limeGreen};
    border: none;
  }
`;

export default StyledDayFormBtnAdd;
