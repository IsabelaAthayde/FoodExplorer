import styled from "styled-components";

export const Container = styled.div`
    width: inherit;
    height: inherit;
    min-height: 100%;
    position: relative;

    
    > main {
        width: 100%;
        height: 100%;
        padding: 1rem 2rem 20rem;
        
        display: flex;
        gap: 2rem;
        
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: auto;
            
            > section#buttons {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 3rem 8rem 0;

                button#back{
                    width: fit-content;
                    height: fit-content;
                    align-self: flex-start;
                    font-size: 2rem;
                    background-color: transparent;
                    border: none;
                }
    
                button#type {
                    width: 16rem;
                }
            }

            h1 {
                width: 90%;
            margin: 0 auto;

            font-family: 'Poppins', sans-serif;
            color: ${({theme}) => theme.COLORS.LIGHT_300};
            font-weight: 400;
            font-size: 3.2rem;
        }
        
        section.history {
            width: 90%;
            height: 100%;
            margin: 0 auto;
            @media (max-width: 768px) {
                width: 100%;
                margin-bottom: 1.7rem;
            }
            
            .dot {
                color: ${({theme}) => theme.COLORS.LIGHT_100};
                width: 8px;
            }
            .status {
                display: flex;
                justify-content: start;
                
                align-items: center;
                gap: .8rem;
                width: fit-content;
                padding-left: 2.4rem;

            }
            .code {
                text-align: start;
                padding-left: 2.4rem;
            }
            > div.table {

                div.item {
                    width: 100%;
                    min-width: 280px;
                    min-height: 114px;
                    height: fit-content;
    
                    margin: 0 auto;
                    padding: 2rem;
    
                    display: grid;
                    gap: 1rem;
                    justify-items: center;
                    align-content: space-between;
    
                    border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
                    border-radius: 10px;
                    
                    @media (max-width: 417px) {
                        padding: 2rem 1rem;
                        overflow: auto;
                    }
    
                    section.header {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 3rem;
                        @media (max-width: 417px) {
                            justify-content: flex-start;
                        }
                    }
    
                    p.description {
                        word-break:break-all;
                    }
                }
            }

            table {
                width: 100%;
                height: fit-content;
                border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
                
                .default, thead tr th,tbody tr td {
                    height: 64px;
                }
                .default { 
                    width: 151px;
                    max-width: 151px;
                    font-family: 'Roboto', sans-serif;
                    
                }
                thead {
                tr:last-of-type{
                    th {
                        background-color: var(--thead-bg);
                        height: 6.4rem;

                        text-align: start;
                        padding-left: 2.4rem;

                        border-bottom: 2px solid #192227;
                        border-right: 2px solid #192227;
                        font-weight: 600;
                    }
                    th:last-of-type {
                        border-right: none;

                    }
                }
                }

                tbody {
                    * {
                    color: ${({theme}) => theme.COLORS.LIGHT_400};
                    }
                    
                td {
                    background-color: var(--thead-bg);
                    height: 6.4rem;

                    text-align: center;


                    border-bottom: 2px solid #192227;
                    border-right: 2px solid #192227;
                }
                td:last-of-type {
                    border-right: none;

                }
                tr:last-of-type {
                   > td {
                    border-bottom: none;
                   }
                }
                }
            }
        }
    }
`;