import styled from "styled-components";

export const Container = styled.div`
    width: inherit;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;

    &::-webkit-scrollbar {
            width: 9px;
        }

        &::-webkit-scrollbar-track {
            background-color: ${({theme}) => theme.COLORS.DARK_700};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({theme}) => theme.COLORS.DARK_1000};
        }
        

    main {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;

        padding: 2.4rem 0;
        margin: 1.6rem auto 3rem;
        border-radius: 8px;

        button#back {
            background: transparent;
            text-align: left;
            justify-content: start;
            font-size: 2.4rem;
            padding-left: 8rem;


            svg {
                font-size: 4rem;
                
            }
        }
        span, p, button#back {
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-family: 'Poppins', sans-serif;
        }

        > div#container {
            width: 80vw;
            height: inherit;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.6rem;

            @media (min-width: 768px) {
                flex-direction: row;
            }

            img.food {
                width: 26.4rem;
                height: 26.4rem;

                @media (min-width: 768px) {
                    width: 36rem;
                    height: 36rem;
                }
                @media (min-width: 1000px) {
                    width: 39rem;
                    height: 39rem;
                }

            }

            > div#info {
                width: 100%;
                height: inherit;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 2.4rem;

                @media (min-width: 768px) {
                    align-items: flex-start;
                }
                

                span.dish-name {
                    font-size: 2.7rem;
                    display: flex;
                    align-items: center;
                    text-align: center;
                }
    
                p {
                    font-weight: 300;
                    text-align: center;
                    @media (min-width: 768px) {
                        text-align: left;
                    }
                }
    
                div#tags-container {
                    width: inherit;
                    height: fit-content;
    
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
                    place-items: center;
                    gap: 2.4rem;

                    @media (min-width: 768px) {
                        padding: 0;
                        gap: 2rem;
                    }
                    @media (min-width: 1000px) {
                        gap: 1rem;
                    }
    
                    span {
                        padding: 1rem;
                        background-color: ${({theme}) => theme.COLORS.DARK_1000};
                        border-radius: 5px;
                        color: ${({theme}) => theme.COLORS.LIGHT_100};
                        min-height: 45px;
                        max-width: 100px;
                        width: fit-content;
                        white-space: pre-wrap;
                        text-align: center;

                        @media (min-width: 900px) {
                            max-width: 160px;
                        }
                            
                        &:hover {
                            transform:  scale(1.1);
                            -webkit-transition: all 0.3s 0s ease-out;
                            -moz-transition: all 0.3s 0s ease-out;
                            -o-transition: all 0.3s 0s ease-out;
                            transition: all 0.3s 0s ease-out;
    
                            -webkit-box-shadow: 0px 2px 6px 1px rgba(29,29,29,0.6);
                            -moz-box-shadow: 0px 2px 6px 1px rgba(29,29,29,0.6);
                            box-shadow: 0px 2px 6px 1px rgba(29,29,29,0.6);
                        }
                    }
                }
    
                > section {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    gap: 1.6rem;
                    margin-top: 3.2rem;
    
                    div.quantity {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 1.6rem;
    
                        span {
                            font-size: 2.2rem;
                            font-family: 'Roboto', sans-serif;
                        }
        
                        a {
                            width: 30px;
                            height: 30px;
                            svg {
                            width: inherit;
                            height: inherit;
                            color: ${({theme}) => theme.COLORS.LIGHT_100};
                            }
                        }
                    }
        
                    button {
                        max-width: 188px;
                        height: fit-content;
                        background-color: ${({theme}) => theme.COLORS.TOMATO_100};
                        border-radius: 5px;

                        white-space: nowrap;
    
                        font-weight: 400;
                        font-size: ${({isAdmin}) => isAdmin ? "1.4rem" : "1.1rem"};
                        padding: 1rem 3rem;
    
                        img {
                            width: 1.7rem;
                            height: 1.7rem;
                            padding: 0;
                        }
                    }
                }

            }

        }

    }
`;