import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.font.family.roboto};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.color.darkBlue} !important;
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.color.white} inset !important;
}

  body {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
