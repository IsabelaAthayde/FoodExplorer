import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;

    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    border: none;
    border-radius: 8px;

    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .9rem;

`;