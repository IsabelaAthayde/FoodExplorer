import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 77px;
    max-height: 77px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.DARK_600};
    border: none;

    padding: 0 2.7rem;
    @media (max-width: 427px) {
        padding: 0 .8rem;

        > h1 {
            margin-right: 1rem;
            > img {
                width: 17px;
                height: 17px;
            }
    
            > span {
                font-size: 1.2rem;
            }
        }
    }
    
    > h1 {
        

        > img {
           width: 22px;
           filter: grayscale(100%) brightness(140%);

        }

        > span {
           font-size: 1.5rem; 
           white-space: nowrap;
            filter: brightness(40%);

        }
        
    }

    > span {
        font-weight: 400;
        font-size: 1.2rem; 
        white-space: nowrap;
    }
`;