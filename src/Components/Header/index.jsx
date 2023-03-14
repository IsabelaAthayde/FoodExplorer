import { Container } from './styles';

import { useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { useAuth } from "../../hooks/auth";
import { BsSearch } from 'react-icons/bs';

import { Logo } from '../Logo';
import { Icon } from '../Icon';
import { LabeledInput } from "../LabeledInput";
import { Button } from "../Button";

import SignOut from "../../assets/icons/SignOut.svg";
import Receipt from "../../assets/icons/Receipt.svg";
import Menu from "../../assets/icons/Menu.svg";

import { useCartContext } from "../../hooks/cart";
import { useState } from 'react';
import { useEffect } from 'react';

export function Header({ isAdmin, getSearch, ...rest }) {
    const { signOut } = useAuth();

    const { productsCart = [] } = useCartContext();

    const header = useRef();
    const navigate = useNavigate();

    const [ ordersQuantity, setOrdersQuantity ] = useState("");
    
    useEffect(() => { 
        setOrdersQuantity(productsCart.length)
    }, [productsCart])

    function toggleFavOrPayButton() {
        const isLargeOnScreen = window.innerWidth >= 768;
        
        if(isLargeOnScreen) {
            navigate('/favorites')
            return
        }
        navigate('/payment')
    }

    return (
        <Container ref={header} isAdmin={isAdmin} {...rest}>

            <button id="menu" onClick={() => navigate("/menu")}>
                <img src={Menu} alt="" />
            </button>

            <Logo isAdmin={isAdmin} onClick={() => navigate("/")}/>
            <LabeledInput 
            name="search" 
            type="text" 
            icon={<BsSearch/>} 
            onChange={e => getSearch(e.target.value)}
            placeholder="Busque por pratos ou ingredientes" 
            />

            <button id="receipt" onClick={() => toggleFavOrPayButton()}>
                <img src={Receipt} alt="" />
                <div id="order">{ordersQuantity}</div>
            </button>
                          
            <Button 
            id="order-lg-screen" 
            text={isAdmin ? "Novo Prato" : `Pedidos (${ordersQuantity})`} 
            icon={<img src={Receipt} alt="" />} 
            onClick={isAdmin ? () => navigate("/new") : () => navigate("/payment")}
            />
            
            <Icon id="signOut" src={SignOut} onClick={() => signOut()} />
        </Container>
    )
}