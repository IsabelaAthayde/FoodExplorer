import { Container } from './styles';
import { cardNumber, expiry, cvc, getCardBrand } from './masks';

<<<<<<< HEAD
export function LabeledInput({ name, tag, label, type, value, icon, mask, ...rest}) {
=======
export function LabeledInput({ name, tag, label, value, icon, mask, ...rest}) {
>>>>>>> 3ae49310352cf5a19d9e7f16387b28f6368563cd
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
<<<<<<< HEAD
            <input id={label} name={name} type={type} value={value} onKeyUp={(e) => handleKeyUp(e)} {...rest} />
=======
            <input id={label} name={name} value={value} onKeyUp={(e) => handleKeyUp(e)} {...rest} />
>>>>>>> 3ae49310352cf5a19d9e7f16387b28f6368563cd
            
        </Container>
    )
}