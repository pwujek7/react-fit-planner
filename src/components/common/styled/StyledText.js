import styled from 'styled-components';

const StyledText = styled.span`
  color: ${props => props.fontColor};
  border-bottom: 3px solid ${({ borderColor }) => borderColor || 'none'};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ fontSize }) => fontSize};
  padding: ${({ padding }) => padding && '0 5px'};
  margin: ${({ margin }) => margin && '0 0 0 5px'};
`;

export default StyledText;
