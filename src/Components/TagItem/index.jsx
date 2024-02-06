import { FiX, FiPlus } from 'react-icons/fi';

import { Container } from "./styles";

export function TagItem({$isnew, value, onClick ,...rest}) {
    return (
        <Container $isnew={$isnew} className="tag">
            <input type="text" 
            value={value} 
            readOnly={!$isnew}
            {...rest}
            />

            <button
            type='button'
            onClick={onClick}
            >
            { $isnew ? <FiPlus /> : <FiX /> }
            </button>
        </Container>
    )
}