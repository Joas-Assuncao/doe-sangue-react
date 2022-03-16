import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        
        box-sizing: border-box;
        
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: #212121;
    }
    
    button {
        cursor: pointer;
    }

    @media(max-width: 770px) {
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 400px) {
        html {
            font-size: 87.5%;
        }
    }
`;