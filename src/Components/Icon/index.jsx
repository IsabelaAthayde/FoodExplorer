import { Container } from './styles';

export function Icon({ src, ...rest }) {
    return (
        <Container {...rest}>
            <img src={src} />
        </Container>
    )
}