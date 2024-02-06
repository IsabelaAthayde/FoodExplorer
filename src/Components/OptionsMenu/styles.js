import styled from "styled-components";

export const Container = styled.div`
    > section {
        width: 100%;
        height: fit-content;
        margin: 4.3rem auto 0;

        background-color: transparent;
    
        display: flex;
        flex-direction: column;
        align-items: start;
        
        gap: 1.6rem;
        padding: 3rem;
        background-color: ${({theme}) => theme.COLORS.DARK_700};
        border-radius: 8px;
        
        > div {
            height: 5.5rem;

            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 1rem;

            background-color: ${({theme}) => theme.COLORS.DARK_800};
            padding: 0.8rem 1.9rem;
            border-radius: 10px;
        }

        > .type1 {
            > .block {
                display: block;
            }

            > .none {
                display: none;
            }
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            gap: 0.2rem;
        } 

        > .type2 {
            display: flex;
            flex-direction: row;
        } 
            
        > #add {
            

            > button, span {
                width: 100%;
                height: fit-content;

                font-weight: 400;
                background-color: ${({theme}) => theme.COLORS.DARK_800};
                color: ${({theme}) => theme.COLORS.LIGHT_400};
                border: none;
            }    
        }
        > #add:hover {
            cursor: pointer;
        }
        
        @keyframes cardEntrance {
            0% {
                opacity: 0;
                transform: translateY(-50px);
            }
        
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }  
    }
`;