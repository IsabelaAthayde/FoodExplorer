import { Container } from './styles';
import { cardNumber, expiry, cvc, getCardBrand } from './masks';

export function LabeledInput({ name, tag, label, type, value, icon, mask, ...rest}) {
    function handleKeyUp(e) {
        if(mask === "cardNumber") {
            cardNumber(e)
            const input = document.getElementById(`${label}`)
            input.setAttribute('cardtype', getCardBrand(e))
        }

        if(mask === "expiry") {
            expiry(e)
        }
        
        if(mask === "cvc") {
            cvc(e)
        }
    }

    return (
        <Container className={name}>
            <label htmlFor={label}>{label}</label>
            <div id="icon">{icon}</div>
            <input id={label} name={name} type={type} value={value} onKeyUp={(e) => handleKeyUp(e)} {...rest} />
            
        </Container>
    )
}