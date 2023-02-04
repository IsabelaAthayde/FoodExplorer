import styled from "styled-components";

export const Container = styled.div`
        width: 100vw;
        height: 100vh;
        position: relative;

    > header {
        width: 100%;
        height: 114px;
        max-height: 114px;

        display: flex;
        align-items: flex-end;
        gap: 1.6rem;

        background-color: ${({theme}) => theme.COLORS.DARK_600};
        border: none;

        padding: 2.4rem 2.7rem;

        > button {
            width: 1.8rem;
            height: 1.8rem;
        }
    }
    > footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;