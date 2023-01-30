import logoSvg from '../../assets/Logo.svg';

import { Container } from './styles';

export function Logo() {
    return (
        <Container>
            <img src={logoSvg} alt="poligono azul"/>
            <span id="logoName">food explorer</span>
        </Container>
    )
}
