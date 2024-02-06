import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 114px;
    max-height: 114px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.DARK_600};
    border: none;

    padding: 0 2.7rem;  

    @media (min-width: 768px) {
        height: 10.4rem;
        max-height: 104px;  
        gap: 2rem;
        padding: 0 4rem;  

    }

    @media (min-width: 1085px) {
        padding: 0 11rem;
        gap: 3.2rem;
    }

    > button#menu {
        background: transparent;
        border: none;
        position: relative;

        @media (min-width: 768px) {
            display: none;
        }
        
    }

    > h1 {
        cursor: pointer;
        @media (max-width: 768px) {
            > img {
                width: 30px;
            }
            span#logoName {
                font-size: 2vw; 
                white-space: nowrap;
            }
        }

        > img {
           width: 30px;
           @media (max-width: 768px) {
            width: 22px;
           }
        }

        > span#logoName {
           font-size: 2rem; 
           white-space: nowrap;
           @media (max-width: 768px) {
            font-size: 1.5rem; 
            
           }

           @media (min-width: 450px) and (max-width: 768px) {
            font-size: 3.5vw;
           }
        }
        
    }

    > div.search {
        flex-direction: row;
        justify-content: center;
        align-items: center;

        background-color: ${({theme}) => theme.COLORS.DARK_900};
        padding-left: 1.4rem;
        border-radius: 8px;

        @media (max-width: 768px) {
            display: none;
        }

        > label {
            display: none;
        }
        > input {
            padding: 0 1.4rem;
            background-color: ${({theme}) => theme.COLORS.DARK_900};

        }
    }

    > span {
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.CAKE_100};
    }

    > button#receipt {
        background: transparent;
        border: none;
        position: relative;
        filter: none;

        @media (max-width: 768px) {
            visibility: ${({isAdmin}) => isAdmin ? 'hidden' : "visible"};
        }

        @media (min-width: 768px) {
            display: ${({isAdmin}) => isAdmin ? 'none' : "block"};
        }

        > div#order {
            position: absolute;
            top: -10px;
            right: -10px;

            width: 20px;
            height: 20px;

            border-radius: 100%;
            background-color: ${({theme}) => theme.COLORS.TOMATO_200};

            display: flex;
            justify-content: center;
            align-items: center;

            @media (min-width: 768px) {
                display: none;
            }
        }

        .menu.active {
            opacity: 1;
            visibility: visible;
        }
        .menu {
            @media (max-width: 768px) {
            display: none
            }

            opacity: 0;
            visibility: hidden;
    
            position: absolute;
            top: 50px;
            left: 0;
            z-index: 4;

            width: fit-content;
            background-color: ${({theme}) => theme.COLORS.DARK_700};

            padding: 2rem 1.6rem 1rem;
            border-radius: 10px;
            filter: none;

            &:hover {
                background: linear-gradient(180deg, rgba(0,17,25,1) 22%, rgba(0,17,25,0.6250875350140056) 100%);
            }

            > li {
                list-style: none;
                white-space: nowrap;
                text-align: left;
                &:hover {
                    color: ${({theme}) => theme.COLORS.LIGHT_200};

                }
            }
        }
    }


    > button#order-lg-screen  {
        max-width: 216px;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;

        > img {
            display: ${({isAdmin}) => isAdmin ? 'none' : "block"};

        }

        @media (max-width: 768px) {
            display: none;
        }
    }

    > button#signOut {
        @media (max-width: 768px) {
            display: none;
        }
    }
`;