import styled from "styled-components";

export const Container = styled.div`
    height: 3.2rem;
    width: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    padding: 0.6rem 1rem;

    background-color: ${({theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.LIGHT_600};
    border: ${({theme, $isnew }) => $isnew ? `2px ${theme.COLORS.LIGHT_600} dashed ` : "none" };
    border-radius: 10px;
    outline: none;

    animation: addTag 0.8s ease-out 0s 1 normal forwards;
    transition: all 0.8s;
    @keyframes addTag {
    0% {
        opacity: 0;
        transform: translateX(100px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
    }


    > button {
        border: none;
        background-color: transparent;
        font-size: 2rem;
        height: 22px;
        svg {
            height: 20px;
            color: ${({theme, $isnew}) => $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100}

        }
    }

    > input {
        display: flex;
        justify-content: center;
        align-items: center;
        
        outline: none;

        height: fit-content;
        width: 7rem;

        background-color: transparent;
        border: none;
        color: ${({theme}) => theme.COLORS.LIGHT_100};

        &::placeholder {
            color: ${({theme}) => theme.COLORS.LIGHT_500}
        }
    }
`;