import { Container } from './styles';

export function Icon({ src, style, ...rest }) {
    return (
        <Container {...rest}>
            <img src={src} style={style} />
        </Container>
    )
}