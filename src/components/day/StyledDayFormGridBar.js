import styled from 'styled-components';

const StyledDayFormGridBar = styled.div`
  display: grid;
  border-bottom: 1px dotted ${({ theme }) => theme.color.lightGray};
  margin: 10px 0 5px 0;
  padding: 0 0 10px 0;
`;

export default StyledDayFormGridBar;
