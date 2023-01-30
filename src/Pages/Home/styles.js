import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    > section#slogan {
        height: 14.9rem;
        width: 90%;
        margin: 1.8rem auto;

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
                top: -30px;
                left: -60px;

                width: 20rem;
                height: 14.9rem;

                object-fit: contain;
            }

            div#text_container {
                
                width: 20.2rem;
                margin-right: 2.1rem;

                h3, p {
                    font-family: 'Poppins', sans-serif;
                    letter-spacing: 1;
                }

                h3 {
                    font-weight: 500;
                    font-size: 1.8rem;
                    width: 20.2rem;
                    line-height: 25px;

                }

                p {
                    font-weight: 300;

                    font-size: 1.2rem;
                    width: 20.2rem;
                    line-height: 17px;
                }
            }
        }
    }
`;