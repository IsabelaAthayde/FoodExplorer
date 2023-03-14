import styled from "styled-components";

export const Container = styled.div`
        width: 100vw;
        height: 100vh;
    position: relative;
        overflow-x: hidden;

    > header {
        width: 100%;
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
        width: 90%;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        gap: 1rem;
        margin: 0 auto 100px;

        place-items: center;

        > div.order {
            display: flex;
            align-items: center;
            gap: 1.3rem;
            margin-bottom: 2rem;

            width: 100%;
            height: fit-content;

            img.food {
                width: 7.2rem;
                height: 7.2rem;
            }

            > aside {
                display: grid;
                gap: .5rem;
                h3 {
                    font-size: 2rem;
                    font-family: 'Poppins', sans-serif;
                    color: ${({theme}) => theme.COLORS.LIGHT_300};
                    font-weight: 400;

                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                > span.price, span.details {
                    font-size: 1.2rem;
                    color: ${({theme}) => theme.COLORS.LIGHT_500};
                }

                > span.details {
                    &:hover {
                        color: ${({theme}) => theme.COLORS.CAKE_100};
                        cursor: pointer;
                    }
                }
            }
        }
    }

    > footer {
       position: fixed;
       bottom: 0;
       z-index: 1;
    }
`;