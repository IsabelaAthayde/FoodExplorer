import { Container } from './styles';

export function LabeledInput({ label, icon, ...rest}) {
    return (
        <Container>
            <label htmlFor={label}>{label}</label>
            <div id="icon">{icon}</div>
            <input id={label} {...rest} />
        </Container>
    )
}