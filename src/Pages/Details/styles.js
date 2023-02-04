import styled from "styled-components";

export const Container = styled.div`
    width: inherit;
    height: inherit;
    overflow: scroll;

    main {
            width: fit-content;
            height: 100%;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;

            padding: 2.4rem 0;
            margin: 1.6rem auto 3rem;
            border-radius: 8px;

            button#back {
                background: transparent;
                text-align: left;
                justify-content: start;
                font-size: 2.4rem;

                svg {
                    font-size: 4rem;
                    
                }
            }
            span, p, button#back {
                color: ${({theme}) => theme.COLORS.LIGHT_300};
                font-family: 'Poppins', sans-serif;
            }

            img.food {
                width: 26.4rem;
                height: 26.4rem;
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
                max-width: 38rem;
                margin: .4rem 0;
            }

            div#tags-container {
                width: fit-content;
                height: fit-content;
                padding: 0 2.8rem;

                display: grid;
                grid-template-columns: auto auto auto;
                place-items: center;
                gap: 2.4rem;

                span {
                    padding: 1rem;
                    background-color: ${({theme}) => theme.COLORS.DARK_1000};
                    border-radius: 5px;
                    color: ${({theme}) => theme.COLORS.LIGHT_100};
                    max-height: 45px;
                    white-space: nowrap;
                        
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
                width: 100%;
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

                    font-weight: 400;
                    font-size: 1.1rem;
                    padding: 1rem 3rem;

                    img {
                        width: 1.7rem;
                        height: 1.7rem;
                        padding: 0;
                    }
                }
            }
        }
`;