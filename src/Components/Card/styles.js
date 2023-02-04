import styled from "styled-components";

export const Container = styled.div`
    min-width: 210px;
    min-height: 292px;
    height: 30rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    
    padding: 2.4rem;

    background-color: ${({theme}) => theme.COLORS.DARK_300};
    border-radius: 8px;

    position: relative;

    .favIcon {
        position: absolute;
        top: 10px;
        right: 10px;
    }

    img.food {
        width: 88px;
        height: 88px;
    }

    span.dish {
        font-size: 1.4rem;
        display: flex;
        align-items: center;

        font-family: 'Poppins', sans-serif;
    }

    p {
        color: ${({theme}) => theme.COLORS.CAKE_100};
    }

    div.quantity {
        display: flex;
        gap: 1.4rem;

        svg {
            width: 19px;
            height: 19px;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }
    }

    button.add {
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
        line-height: 2;
        border-radius: 5px;
        font-weight: 400;
    }
`;