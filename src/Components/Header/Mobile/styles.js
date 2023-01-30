import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 114px;
    max-height: 114px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.DARK_600};
    border: none;

    padding: 0 2.7rem;

    > img {
           width: 22px;
    }

    > h1 {
        > img {
           width: 22px;
        }

        > span {
           font-size: 1.5rem; 
           white-space: nowrap;

        }
        
    }

    > button {
        background: transparent;
        border: none;
        position: relative;
        
        > img {
        }

        > div#order {
            position: absolute;
            top: -10px;
            right: -10px;

            width: 20px;
            height: 20px;

            border-radius: 100%;
            background-color: ${({theme}) => theme.COLORS.TOMATO_200};

            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;