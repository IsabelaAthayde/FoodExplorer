import { Container } from './styles';
import { Logo } from '../Logo';

export function Footer() {
    return (
        <Container>
            <Logo />
            <span>&copy; 2023 &minus; Todos os direitos reservados.</span>
        </Container>
    )
}