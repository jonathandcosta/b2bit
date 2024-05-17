import { createGlobalStyle } from 'styled-components';

export const breakpoints = {
  mobile: '768px',
};

export const GlobalCss = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Nunito, sans-serif;
    text-decoration: none;

    img {
      width: 100%;
    }

    .background{
      background-color: #F1F5F9;
      height: 100vh;
    }
  };

`;
