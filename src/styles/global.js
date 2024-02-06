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

        overflow-x: hidden;

        -webkit-font-smoothing: antialiased;

        &::-webkit-scrollbar {
            width: 9px;
        }

        &::-webkit-scrollbar-track {
            background-color: ${({theme}) => theme.COLORS.DARK_700};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.COLORS.DARK_1000};
        }
        
    }

    body, input, textarea, select {
        font-family: 'Roboto', serif;
        font-size: 1.6rem;
        outline: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    input:hover, textarea:hover, select:hover {
            color: ${({theme}) => theme.COLORS.LIGHT_400};
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
        filter: brightness(0.8);
    }
`;