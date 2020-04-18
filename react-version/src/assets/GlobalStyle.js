import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    html, body {
        height: 100%;
        font-family: sans-serif;
        background: ${props => props.theme.colors.bg};
        color: ${props => props.theme.colors.text};
    }
`;