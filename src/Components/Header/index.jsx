import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useCartContext } from "../../hooks/cart";
import { useAuth } from "../../hooks/auth";

import { Container } from './styles';

import { Logo } from '../Logo';
import { Icon } from '../Icon';
import { LabeledInput } from "../LabeledInput";
import { Button } from "../Button";

import { BsSearch } from 'react-icons/bs';
import SignOut from "../../assets/icons/SignOut.svg";
import Receipt from "../../assets/icons/Receipt.svg";
import Menu from "../../assets/icons/Menu.svg";

export function Header({ isAdmin, getSearch, ...rest }) {
    const { signOut } = useAuth();

    const { productsCart = [] } = useCartContext();

    const header = useRef();
    const navigate = useNavigate();
    const dropDown = useRef();

    const [ ordersQuantity, setOrdersQuantity ] = useState("");
    const [ isActive, setIsActive ] = useState(false);
    
    useEffect(() => { 
        setOrdersQuantity(productsCart.length)
    }, [productsCart])

    function toggleFavOrPayButton(e) {
        e.preventDefault()
        const isLargeOnScreen = window.innerWidth >= 768;
        
        if(isLargeOnScreen) {
            setIsActive(!isActive);
            return
        }
        navigate('/payment')
    }

    return (
        <Container ref={header} isAdmin={isAdmin} {...rest}>

            <button id="menu" onClick={() => navigate("/menu")}>
                <img loading="lazy" src={Menu} alt="botão do menu" />
            </button>

            <Logo isAdmin={isAdmin} onClick={() => navigate("/")}/>
            <LabeledInput 
            name="search" 
            type="text" 
            icon={<BsSearch/>} 
            onChange={e => getSearch(e.target.value)}
            placeholder="Busque por pratos ou ingredientes" 
            />

            <button id="receipt" onClick={(e) => toggleFavOrPayButton(e)}>
                <img loading="lazy" src={Receipt} alt="botão de pedidos" />
                <div id="order">{ordersQuantity}</div>

                <nav
                ref={dropDown}
                className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <li><a onClick={()=> navigate("/")}>Home</a></li>
                    <li><a onClick={()=> navigate("/favorites")}>Favoritos</a></li>
                    <li><a onClick={()=> navigate("/order-history")}>Histórico de Pedidos</a></li>
                    <li><a onClick={()=> navigate("/config")}>Configurações</a></li>
                </nav>
            </button>
                          
            <Button 
            id="order-lg-screen" 
            text={isAdmin ? "Novo Prato" : `Pedidos (${ordersQuantity})`} 
            icon={<img src={Receipt} alt="" />} 
            onClick={isAdmin ? () => navigate("/new") : () => navigate("/payment")}
            />
            
            <Icon id="signOut" src={SignOut} onClick={async () => {
                await signOut() 
                navigate("/")}
            } />
        </Container>
    )
}