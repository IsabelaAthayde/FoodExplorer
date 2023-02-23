import styled from "styled-components";

export const Container = styled.div`
        width: inherit;
        height: inherit;
        position: relative;
        padding: 2rem;

        overflow: scroll;

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

    > div.search  {
        width: 90%;
        height: 4.8rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        padding: 1.4rem;
        margin: 3.6rem auto;

        background-color: ${({theme}) => theme.COLORS.DARK_800};
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        border: none;
        border-radius: 8px;
    }

    > section.handleButtons {
        display: grid;
        width: 90%;
        height: fit-content;
        margin: 0 auto 3rem;
        a {
            text-decoration: none;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-size: 2rem;
            padding: 1rem 0;
            border-bottom: ${({theme }) => `1px ${theme.COLORS.DARK_1000} solid`};
            font-family: 'Poppins', sans-serif;
        }
    }

    > section#list-search {
        width: 100%;
        height: fit-content;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        gap: 1rem;
        margin: 0 auto 100px;

        place-items: center;
    }

    > footer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;