import styled from "styled-components";

export const Container = styled.button`
    background: transparent;
    border: none;

    width: 2.4rem;
    height: 2.4rem;

    > img {
        width: inherit;
        height: inherit;

        object-fit: contain;
    }
`;