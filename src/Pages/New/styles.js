import styled from "styled-components";

export const Container = styled.div`
    width: inherit;
    height: inherit;
    overflow-y: scroll;

    main {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        
        > form {           
            width: 80%;
            height: 100%;
            
            display: flex;
            flex-direction: column;
            gap: 2rem;
            
            padding: 5.3rem 0;
            border-radius: 8px;
            
            button#back {
                background: transparent;
                text-align: left;
                justify-content: start;
                font-size: 2.4rem;
                
                svg {
                    font-size: 4rem;
                        
                    }
                    color: ${({theme}) => theme.COLORS.LIGHT_300};
                   
            }

            h2 {
                font-family: 'Poppins', sans-serif;
                font-size: 3rem;
                font-weight: 400;
                margin: 1.2rem 0;
            }

            button, label, ::selection, textarea, h2 {
                font-family: 'Poppins', sans-serif;
            }

            > section#row1 {
                display: flex;
                flex-direction: column;
                gap: 2.4rem;

                @media (min-width: 768px) {
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                > label {
                    height: fit-content;

                    background-color: transparent;

                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    font-weight: 400;
                    color: ${({theme}) => theme.COLORS.LIGHT_400};

                    > div.file {
                        display: flex;
                        flex-direction: row-reverse;
                        justify-content: start;
                        align-items: center;
                        gap: 1rem;
                        width: 100%;
                        height: 4.8rem;
                        
                        margin-top: 1.6rem;
                        padding: 1.4rem;
                        background-color: ${({theme}) => theme.COLORS.DARK_800};
                        color: ${({theme}) => theme.COLORS.LIGHT_500};
                        border: none;
                        border-radius: 8px;

                        @media (min-width: 768px) {
                            width: 22.9rem;
                        }

                        label {
                            margin: 0;

                        }

                        svg {
                            color: ${({theme}) => theme.COLORS.LIGHT_100};
                            width: 24px;
                            height: 24px;
                            cursor: pointer;
                        }

                        input[type='file'] {
                            display: none;
                        }
                    }
                }

                > div.name {
                    label {
                        
                        margin: 0;
                    }
                    input {
                        margin-top: 1.6rem;
                    }
                }

                > #Category {
                    width: 100%;
                    height: fit-content;

                    background-color: transparent;

                    display: flex;
                    flex-direction: column;
                    align-items: start;
                    font-weight: 400;
                    color: ${({theme}) => theme.COLORS.LIGHT_400};

                    @media (min-width: 768px) {
                        width: 30rem;
                    }

                    > select {
                    width: 100%;
                    height: 4.8rem;

                    margin-top: 1.6rem;
                    padding: 1.4rem;
                    background-color: ${({theme}) => theme.COLORS.DARK_900};
                    color: ${({theme}) => theme.COLORS.LIGHT_500};
                    border: none;
                    border-radius: 8px;
                    }
                }
            }

            > section#row2 {
                display: flex;
                flex-direction: column;
                gap: 2.4rem;

                @media (min-width: 768px) {
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                > label#Ingredient {
                    flex: 2;

                    div#tagitem-container {
                        width: 100%;
                        height: 4.8rem;

                        margin-top: 1.6rem;
                        padding: 1.4rem;
                        background-color: ${({theme}) => theme.COLORS.DARK_900};
                        color: ${({theme}) => theme.COLORS.LIGHT_500};
                        border: none;
                        border-radius: 8px;

                        display: flex;
                        align-items: center;
                        gap: 1.6rem;

                        overflow-x: auto;
                        overflow-y: hidden;
                    }
                }

                > div.price {
                    flex: 1;
                    label {
                        margin: 0;
                    }
                    input {
                        margin-top: 1.6rem;
                    }
                }

            }

            > label#Description {
                width: 100%;
                
                > textarea {
                    padding: 1.4rem;
                    margin-top: 1.6rem;
                    width: 100%;
                    height: 172px;
                    background-color: ${({theme}) => theme.COLORS.DARK_800};
                    color: ${({theme}) => theme.COLORS.LIGHT_500};
                    border: none;
                    border-radius: 8px;

                    resize: none;
                }
            }

            > button#btn {
                background-color: ${({theme}) => theme.COLORS.TOMATO_400};
                @media (min-width: 768px) {
                        width: 18rem;
                        align-self: flex-end;
                }

                &:hover {
                    background-color: ${({theme}) => theme.COLORS.TOMATO_300};
                    filter: none;
                }
            }
            
        }
    }
`;