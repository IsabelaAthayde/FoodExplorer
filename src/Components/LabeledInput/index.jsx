import { Container } from './styles';

export function LabeledInput({ name, tag, label, icon, ...rest}) {
    return (
        <Container className={name}>
            <label htmlFor={label}>{label}</label>
            <div id="icon">{icon}</div>
            <input id={label} {...rest} />
            
        </Container>
    )
}