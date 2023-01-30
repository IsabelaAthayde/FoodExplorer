import styled from "styled-components";

export const Container = styled.h1`
    width: fit-content;
    height: 4.4rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    > img {
        width: 43px;
        height: 43px;
    }

    > span {
        font-size: 3.7rem;
    }
`;