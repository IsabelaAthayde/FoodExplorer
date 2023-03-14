import styled from "styled-components";

import sloganSmall from "../../assets/sloganSmall.svg";
import sloganBig from "../../assets/sloganBig.svg";

export const Container = styled.div`
    width: inherit;
    height: inherit;
    min-height: 100vh;
    position: relative;

    padding-bottom: 10rem;

    > section#slogan {
        min-height: 14.9rem;
        width: 90%;
        margin: 4.4rem auto;

        display: flex;
        justify-content: end;
        align-items: end;
        position: relative;

        @media (min-width: 565px) {
            height: 19.7rem;
        }

        @media (min-width: 805px) {
            height: 26.2rem;
        }

        div#color_bg {
            height: 12rem;
            width: 90%;
            margin: 0 auto;
            background: ${({theme}) => theme.COLORS.GRADIENT_200};

            display: flex;
            justify-content: end;
            align-items: center;

            @media (min-width: 565px) {
                height: 70%;
            }

            aside {
                background-image: url(${sloganSmall});
                
                background-repeat: no-repeat;
                background-size: contain;
                position: absolute;
                left: 0;
                bottom: 0; 
                
                width: 50%;
                max-width: 656px;
                height: 100%;
                
                @media (max-width: 443px) {
                    width: 60%;
                    background-size: cover;
                    left: -30px;

                }

                @media (min-width: 565px) {
                    background-image: url(${sloganBig});
                    width: 656px;
                    max-width: 656px;
                }

            }

            div#text_container {
                width: 50%;
                min-width: 21rem;
                max-width: 422px;
                margin-right: 2.1rem;
                text-align: center;
                z-index: 2;

                @media (min-width: 565px) {
                    width: 70%;
                }
                @media (min-width: 805px) {
                    width: 100%;
                    margin-right: 5rem;
                }


                h3, p {
                    font-family: 'Poppins', sans-serif;
                    letter-spacing: 1;
                }

                h3 {
                    font-weight: 500;
                    font-size: 1.8rem;
                    
                    line-height: normal;
                    @media (min-width: 565px) {
                        font-size: 2.6rem;
                    }

                    @media (min-width: 993px) {
                        font-size: 4rem;
                    }
                }
                
                p {
                    font-weight: 300;
                    
                    font-size: 1.2rem;
                    line-height: normal;
                    @media (min-width: 565px) {
                        font-size: 1.6rem;
                        font-weight: 400;
                        color: ${({theme}) => theme.COLORS.LIGHT_300};
                        margin-top: 0.8rem;
                    }
                }
            }
        }
    }
`;