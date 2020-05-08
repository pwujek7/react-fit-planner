import { css } from 'styled-components';
import { theme } from '../theme/Theme';

export const COLOR = {
  BLUE: theme.color.chartBlue,
  DARKBLUE: theme.color.darkBlue,
  GRAY: theme.color.gray,
  LIGHTGRAY: theme.color.lightGray,
  RED: theme.color.chartRed,
  VERYLIGHTGRAY: theme.color.veryLightGray,
  WHITE: theme.color.white,
  YELLOW: theme.color.chartYellow
};

export const SIZE = {
  S: theme.font.size.s,
  M: theme.font.size.m,
  L: theme.font.size.l,
  XL: theme.font.size.xl
};

export const WEIGHT = {
  NORMAL: theme.font.weight.normal,
  MEDIUM: theme.font.weight.medium
};

export const FLEXCOLUMN = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const FLEXROW = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
