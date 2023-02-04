import { Container } from "./styles";
import { Footer } from '../../Components/Footer';
import { Button } from '../../Components/Button';
import { Icon } from '../../Components/Icon';

import Close from "../../assets/icons/Close.svg";



export function Menu() {
    return (
        <Container>
            <header>
                <Icon src={Close} />
                Menu
            </header>

            <Footer/>
        </Container>
    )
}