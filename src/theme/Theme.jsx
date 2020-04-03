import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

export const theme = {
  breakpoint: {
    s: '320px',
    m: '768px',
    l: '1024px',
    xl: '1366px'
  },
  color: {
    cyan: '#2bb7da',
    darkBlue: '#2d314d',
    gray: '#9698a6',
    lightGray: '#f3f4f6',
    limeGreen: '#31d35c',
    veryLightGray: '#fafafa',
    white: '#ffffff'
  },
  font: {
    size: {
      s: '0.875rem',
      m: '1rem',
      l: '1.125rem',
      xl: '1.250rem'
    },
    weight: {
      normal: '400',
      bold: '700',
    },
    family: {
      roboto: '"Roboto", sans-serif'
    }
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node
};

export default Theme;
