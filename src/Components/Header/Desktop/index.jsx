import { Container } from './styles';
import { Logo } from '../../Logo';

import { LabeledInput } from "../../LabeledInput";
import { Button } from "../../Button";

import { BsSearch } from 'react-icons/bs';
import SignOut from "../../../assets/icons/SignOut.svg";
import Receipt from "../../../assets/icons/Receipt.svg";

export function HeaderDesktop() {
    return (
        <Container>
            <Logo />
            <LabeledInput type="text" icon={<BsSearch/>} placeholder="Busque por pratos ou ingredientes" />
            <img src={Receipt} alt="" />
            <Button text="Pedidos (0)" />
            <img src={SignOut} alt="" />
        </Container>
    )
}