import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        font-family: Arial, Helvetica, sans-serif;
    }
    body {
        margin: 0;
        padding: 0;
        overflow: hidden;
        min-height: 100vh;
        color: ${({ theme }) => theme.color.primary};
        background-color: ${({ theme }) => theme.color.secondaryDarken};
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
`;
