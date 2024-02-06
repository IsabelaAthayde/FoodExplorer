import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: fit-content;

    background-color: transparent;
   
    display: flex;
    flex-direction: column;
    align-items: start;

    > label, input {
        font-weight: 400;
    }

    > label {
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        margin-bottom: .8rem;
        cursor: pointer;
    }


    > input {
        width: 100%;
        height: 4.8rem;

        padding: 1.4rem;
        background-color: ${({theme}) => theme.COLORS.DARK_800};
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        border: none;
        border-radius: 8px;
    }
`;