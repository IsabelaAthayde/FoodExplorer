import styled from "styled-components";

export const Container = styled.div`

    width: 100vw;
    height: inherit;
    min-height: 100%;
    position: relative;

    > main {
        width: 100%;
        height: 100%;
        padding: 5rem 5rem 20rem;
        margin-bottom: 10rem;

        > .content-wrapper {
            width: 90%;
            height: fit-content;

            margin: 4.3rem auto 0;

            gap: 3.2rem;

            grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
        }
        
        > .content-wrapper {
            > section {
                > span {
                    font-size: 2rem;
                    cursor: pointer;
                    display: flex;
                    gap: 1rem;
                    margin: 1rem 0;
                }
                > h2 {
                    width: 90%;
                    font-family: 'Poppins', sans-serif;
                    color: ${({theme}) => theme.COLORS.LIGHT_300};
                    font-weight: 400;
                    font-size: 3.2rem;
                }

                > div {
                    display: flex;
                    gap: 0.4rem 1.5rem;
                    margin: 3.5rem 0;
    
                    width: 100%;
                    height: 100%;
                    cursor: pointer;
                    
                    > .street,.city {
                        flex: 1;
                    }
            
                    > .streetNumber,.state {
                        flex: 0 0 20%;
                    }

                    
                      
                }
            }
    
            button {
                width: 60%;
                margin: 0 auto;
            }
        }
    }
`;
