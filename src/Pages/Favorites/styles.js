import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

    > main {
        width: 100%;
        height: 100%;
        padding: 5rem;

        > h2 {
            width: 90%;
            margin: 0 auto;

            font-family: 'Poppins', sans-serif;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-weight: 400;
            font-size: 3.2rem;
        }

        > section {
            width: 90%;
            height: fit-content;

            margin: 4.3rem auto 0;

            display: grid;
            gap: 3.2rem;

            @media (min-width: 768px) {
                grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
            }

            > div {
                display: flex;
                align-items: center;
                gap: 1.3rem;

                width: 100%;
                height: 100%;

                img.food {
                    width: 7.2rem;
                    height: 7.2rem;
                }

                > aside {
                    h3 {
                        font-size: 2rem;
                        font-family: 'Poppins', sans-serif;
                        color: ${({theme}) => theme.COLORS.LIGHT_300};
                        font-weight: 400;
                    }
                    
                    span {
                        font-size: 1.2rem;
                        color: ${({theme}) => theme.COLORS.TOMATO_400}
                    }
                }
            }
        }

        
    }
`;