import styled from "styled-components";

export const Container = styled.main`
    width: 100vw;
    height: 100vh;
    min-height: 429px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7.3rem;

    text-align: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
    }

    > h1 {
        min-width: 278px;

        > span#logoName {
            font-size: 3.7rem;
        }
    }

    > section {
        display: grid;
        gap: 3.2rem;

        width: 31rem;

        @media (min-width: 768px) {
            background-color: ${({theme}) => theme.COLORS.DARK_700};
            width: 47.6rem;
            padding: 6.4rem;
            border-radius: 16px;
        }

        h2 {
            display: none;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            font-size: 3.2rem;

            @media (min-width: 768px) {
                display: block;
            }
        }

        #nav {
            background-color: transparent;
            border: none;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
        }
    }
`;