import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: inherit;
    min-height: 100%;
    position: relative;

    > button:first-of-type {
        width: fit-content;
        height: fit-content;
        margin: 3rem 5rem 0;

        font-size: 2rem;
        background-color: transparent;
        border: none;
    }

    > main {
        width: 100%;
        height: 100%;
        padding: 5rem 5rem 20rem;

        display: flex;
        gap: 2rem;

        @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: auto;
        }

        h2 , h4 {
            width: 90%;
            margin: 0 auto;

            font-family: 'Poppins', sans-serif;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-weight: 400;
            font-size: 3.2rem;
        }

       

        > section#my-orders {

            width: 50%;
            height: fit-content;

            display: grid;
            gap: 3.2rem;

            > div#container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                max-height: 44.5rem;
                overflow: auto;
                > div {
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
                        h3 {
                            font-size: 2rem;
                            font-family: 'Poppins', sans-serif;
                            color: ${({theme}) => theme.COLORS.LIGHT_300};
                            font-weight: 400;
                            white-space: nowrap;
                            > span.price {
                                font-size: 1.2rem;
                                color: ${({theme}) => theme.COLORS.LIGHT_500};
                            }
                        }
                        
                        > span {
                            font-size: 1.2rem;
                            color: ${({theme}) => theme.COLORS.TOMATO_400}
                        }
                    }
                }
            }

            > h4 {
                font-size: 2rem;
            }
        }

        > section#payment {
            > h2 {
                text-align: center;
            }

            > div#pay-container {
                width: 53rem;
                height: 44.5rem;
                border: 1px solid ${({theme}) => theme.COLORS.LIGHT_500};
                display: grid;

                margin-top: 3.2rem;

                @media (max-width: 962px) {
                    width: 38rem;
                }

                div#options {
                    display: flex;
                    
                    > button {
                        width: 50%;
                        flex: 1;
                        background: transparent;
                        border: none;         
                        border-bottom: 1px solid ${({theme}) => theme.COLORS.LIGHT_500};
                        outline: none;
                        padding: 2.8rem 0;
                        
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        gap: .8rem;

                        img {
                            width: 32px;
                            height: 32px;
                        }
                    }
                    
                    > button:first-of-type {
                        border-right: 1px solid ${({theme}) => theme.COLORS.LIGHT_500};
                    }
                }
                
                > div#img-container {
                    width: 100%;
                    height: 100%;
                    display: grid;
                    place-items: center;
                }
            }
        }
    }
`;