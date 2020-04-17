import styled from 'styled-components';
import { theme } from '../../../theme/Theme';

export const FONTCOLOR = {
  DARKBLUE: theme.color.darkBlue,
  GRAY: theme.color.gray,
  LIGHTGRAY: theme.color.lightGray,
  WHITE: theme.color.white
};

export const BORDERCOLOR = {
  BLUE: theme.color.chartBlue,
  RED: theme.color.chartRed,
  YELLOW: theme.color.chartYellow
};

export const FONTSIZE = {
  S: theme.font.size.s,
  M: theme.font.size.m,
  L: theme.font.size.l,
  XL: theme.font.size.xl
};

export const FONTWEIGHT = {
  NORMAL: theme.font.weight.normal,
  MEDIUM: theme.font.weight.medium
};

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
