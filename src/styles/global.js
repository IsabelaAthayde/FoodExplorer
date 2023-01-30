import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
        
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.6rem;
        width: 100vw;
        height: 100vh;

        -webkit-font-smoothing: antialiased;
        > #root {
            width: 100vw;
            height: 100vh;
        }
    }

    body, input, textarea, select {
        font-family: 'Roboto', serif;
        font-size: 1.6rem;
        outline: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

    }
    
    button {
        font-family: 'Poppins', serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.6rem;
        font-weight: 500;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;