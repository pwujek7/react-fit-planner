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
    gray: '#abacb7',
    lightGray: '#d5d5db',
    limeGreen: '#31d35c',
    red: '#ff5159',
    veryLightGray: '#f4f4f6',
    white: '#ffffff'
  },
  font: {
    size: {
      s: '0.875rem',
      m: '1rem',
      l: '1.125rem',
      xl: '1.250rem',
      xxl: '1.5rem'
    },
    weight: {
      thin: '100',
      normal: '400',
      medium: '500',
      bold: '700'
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
