import styled from "styled-components";

export const Container = styled.section`
    width: 90%;
    max-width: 1100px;
    min-height: 400px;
    margin: 0 auto;

    @media (max-width: 500px) {
        margin: 0 0 0 2.4rem;
        width: 100%;
    }

    > span:first-of-type {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
        
        margin: 24px 0;
        display: block;
    }

    .carousel {
        cursor: grab;
        overflow: hidden;
        position: relative;
        .inner {
            display: flex;
            .item {
                min-width: 210px;
                max-width: 304px;
                min-height: 292px;
                
                padding: 14px;
                margin: 0 10px;
        
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 10px;
                border-radius: 12px;
        
                background-color: black;
        
                position: relative;
        
                img.food {
                    width: 40%;
                    pointer-events: none;
                }
            
                button.favIcon {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    width: 24px;
                    height: 24px;
                    img {
                        width: 100%;
                        height: 100%;
                        
                    } 
                    align-items: center;
            
                    font-family: 'Poppins', sans-serif;
                }
            
                p.ingredients {
                    color: ${({theme}) => theme.COLORS.LIGHT_100};
                    font-weight: 400;
                    font-size: 14px;
                    text-align: center;
                    max-width: 162px;
                    max-height: 52px;
                    overflow: hidden;
                    @media (max-width: 200px) {
                        display: none;
                    }
                }
                
            
                p.price {
                    color: ${({theme}) => theme.COLORS.CAKE_100};
                }
            
                div.quantity {
                    display: flex;
                    gap: 14px;
            
                    svg {
                        width: 19px;
                        height: 19px;
                        color: ${({theme}) => theme.COLORS.LIGHT_100};
                    }
                }
            
                button.add {
                    width: 100%;
                    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
                    line-height: 2;
                    border-radius: 5px;
                    font-weight: 400;
                }
            }
    
        }
        
        .arrow-left, .arrow-right {
            width: 6rem;
            height: 100%;
            position: absolute;
            background-color: black;
            opacity: 0.4;
            color: white;
            z-index: 2;
            top: 0;
            bottom: 0;

            svg {
                width: 30px;
                height: 30px;
                font-size: 2rem;
            }

            @media (max-width: 500px) {
                display: none;
            }
        }

        .arrow-left {
            left: 0;
        } 
        .arrow-right {
            right: 0;
        }

        .translate {
            transform: translateX(-210px);
        }
    }
`;
