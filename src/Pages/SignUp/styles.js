import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: 100%;
    min-height: 429px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7.3rem;

    text-align: center;

    > h1 {
        min-width: 278px;
    }

    > section {
        display: grid;
        gap: 3.2rem;

        width: 31rem;

        h2 {
            display: none;
        }

        #nav {
            background-color: transparent;
            border: none;
        }
    }
`;