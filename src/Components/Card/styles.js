import styled from "styled-components";

export const Container = styled.div`
    width: 210px;
    min-height: 302px;
    height: fit-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    
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
        height: 51px;

        font-family: 'Poppins', sans-serif;
    }
    
    p.ingredients {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        font-weight: 400;
        font-size: 1.4rem;
        text-align: center;

        @media (max-width: 200px) {
            display: none;
        }
    }

    p.price {
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