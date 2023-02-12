import { Container } from "./styles";
import { Footer } from '../../Components/Footer';
import { LabeledInput } from '../../Components/LabeledInput';
import { Icon } from '../../Components/Icon';
import { BsSearch } from 'react-icons/bs';


import Close from "../../assets/icons/Close.svg";



export function Menu({isAdmin}) {
    return (
        <Container isAdmin={isAdmin}>
            <header>
                <Icon src={Close} />
                Menu
            </header>

            <LabeledInput icon={<BsSearch/>} placeholder="Busque por pratos ou ingredientes"/>
            
            { isAdmin ? (
            <section>
                <a href="">Novo prato</a>
                <a href="">Sair</a>
            </section>) 
            : 
            (
                <section>
                <a href="">Meus Favoritos</a>
                <a href="">Sair</a>
            </section>
            )} 
            <Footer/>
        </Container>
    )
}