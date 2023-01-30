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

    
    > h1 {
        > img {
           width: 22px;
        }

        > span {
           font-size: 1.5rem; 
           white-space: nowrap;

        }
        
    }

    > span {
        font-weight: 400;
        font-size: 1.2rem; 
        white-space: nowrap;
    }
`;