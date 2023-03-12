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
        }
    }
`;