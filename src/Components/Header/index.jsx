import { Container } from './styles';
import { Logo } from '../Logo';

import { LabeledInput } from "../LabeledInput";
import { Button } from "../Button";

import { BsSearch } from 'react-icons/bs';
import SignOut from "../../assets/icons/SignOut.svg";
import Receipt from "../../assets/icons/Receipt.svg";
import Menu from "../../assets/icons/Menu.svg";


export function Header({ isAdmin, ...rest }) {
    return (
        <Container {...rest} isAdmin={isAdmin}>

            <button id="menu">
                <img src={Menu} alt="" />
            </button>

            <Logo isAdmin={isAdmin}/>
            <LabeledInput  name="search" type="text" icon={<BsSearch/>} placeholder="Busque por pratos ou ingredientes" />

           
                    <button id="receipt">
                        <img src={Receipt} alt="" />
                        <div id="order">0</div>
                    </button>
                


                        
            <Button id="order-lg-screen" text={isAdmin ? "Novo Prato" : "Pedidos (0)"} icon={<img src={Receipt} alt="" />} />
            <img id="signOut" src={SignOut} alt="" />
        </Container>
    )
}