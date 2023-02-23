import { Container } from './styles';

export function LabeledInput({ name, tag, label, icon, value, ...rest}) {
    return (
        <Container className={name}>
            <label htmlFor={label}>{label}</label>
            <div id="icon">{icon}</div>
            <input id={label} value={value} {...rest} />
            
        </Container>
    )
}