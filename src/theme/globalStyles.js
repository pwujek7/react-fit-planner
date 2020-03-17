import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.font.family.roboto};
  }

  body {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
