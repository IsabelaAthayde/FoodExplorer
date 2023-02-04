import styled from "styled-components";

export const Container = styled.div`
    width: inherit;
    height: inherit;
    overflow: scroll;


    > section#slogan {
        min-height: 14.9rem;
        width: 90%;
        margin: 4.4rem auto;

        display: flex;
        justify-content: end;
        align-items: end;

        div#color_bg {
            height: 12rem;
            width: 90%;
            background: ${({theme}) => theme.COLORS.GRADIENT_200};

            display: flex;
            justify-content: end;
            align-items: center;

            position: relative;

            img {
                position: absolute;
                left: -40px;
                bottom: 0; 

                width: 50%;
                
                max-height: 170px;
            }

            div#text_container {
                width: 50%;
                min-width: 21rem;
                max-width: 422px;
                margin-right: 2.1rem;
                text-align: center;
                z-index: 2;

                h3, p {
                    font-family: 'Poppins', sans-serif;
                    letter-spacing: 1;
                }

                h3 {
                    font-weight: 500;
                    font-size: 1.8rem;
                    
                    line-height: 25px;

                }

                p {
                    font-weight: 300;

                    font-size: 1.2rem;
                    line-height: 17px;
                }
            }
        }
    }

    
`;