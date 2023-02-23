import { Container } from './styles';

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

export function Header({ isAdmin, ...rest }) {
    const { signOut } = useAuth();

    const navigate = useNavigate();

    return (
        <Container {...rest} isAdmin={isAdmin}>

            <button id="menu" onClick={() => navigate("/menu")}>
                <img src={Menu} alt="" />
            </button>

            <Logo isAdmin={isAdmin} />
            <LabeledInput  name="search" type="text" icon={<BsSearch/>} placeholder="Busque por pratos ou ingredientes" />
           
            <button id="receipt" onClick={() => navigate("/payment")}>
                <img src={Receipt} alt="" />
                <div id="order">0</div>
            </button>
                          
            <Button 
            id="order-lg-screen" 
            text={isAdmin ? "Novo Prato" : "Pedidos (0)"} 
            icon={<img src={Receipt} alt="" />} 
            onClick={isAdmin ? () => navigate("/new") : () => navigate("/payment")}
            />
            
            <Icon id="signOut" src={SignOut} onClick={() => signOut()} />
        </Container>
    )
}