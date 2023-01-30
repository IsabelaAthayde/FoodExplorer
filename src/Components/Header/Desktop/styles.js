import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 10.4rem;
    max-height: 104px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.2rem;

    background-color: ${({theme}) => theme.COLORS.DARK_600};
    border: none;

    padding: 0 11rem;

    > h1 {
        > img {
           width: 30px;
        }

        > span {
           font-size: 2.4rem; 
           white-space: nowrap;

        }
        
    }

    > div:first-of-type {
        flex-direction: row;
        justify-content: center;
        align-items: center;

        background-color: ${({theme}) => theme.COLORS.DARK_900};
        padding-left: 1.4rem;
        border-radius: 8px;

        > label {
            display: none;
        }
        > input {
            padding: 0 1.4rem;

        }
    }

    > button {
        max-width: 216px;
    }
`;