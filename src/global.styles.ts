import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    html, body {
        background: #f7f7f7
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // https://www.madebymike.com.au/writing/fluid-type-calc-examples/;
        font-size: calc(5px + (36 - 5) * ((100vw - 380px) / (1980 - 380)));
    }
    
    body {
            padding: 1rem; 
    }

`;

export default GlobalStyles;
