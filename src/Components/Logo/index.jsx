import logoSvg from '../../assets/Logo.svg';

import { Container } from './styles';

export function Logo({isAdmin}) {
    return (
        <Container isAdmin={isAdmin}>
            <img src={logoSvg} alt="poligono azul"/>
            {isAdmin ? (<span id="logoName">food explorer <span id="admin">admin</span> </span>) : <span id="logoName">food explorer</span> }
        </Container>
    )
}
