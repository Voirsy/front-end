import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html, body, p, h1, h2, h3, h4, h5, h6, button, input {
        margin: 0;
        padding: 0;
    }

    ol, ul {
        list-style: none;
    }

    body {
        background-color: ${({ theme }) => theme.colors.background};
        font-family:  ${({ theme }) => theme.fonts.roboto};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    button, input {
        font-family:  ${({ theme }) => theme.fonts.roboto};
    }
`;
