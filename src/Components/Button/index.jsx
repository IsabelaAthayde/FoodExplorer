import { Container } from './styles';

export function Button({ text, icon, ...rest}) {
    return (
        <Container {...rest}>
            {icon}
            {text}
        </Container>
    )
}