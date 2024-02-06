import { FiX, FiPlus } from 'react-icons/fi';

import { Container } from "./styles";

<<<<<<< HEAD
export function TagItem({$isnew, value, onClick ,...rest}) {
    return (
        <Container $isnew={$isnew} className="tag">
            <input type="text" 
            value={value} 
            readOnly={!$isnew}
=======
export function TagItem({isNew, value, onClick ,...rest}) {
    return (
        <Container isNew={isNew}>
            <input type="text" 
            value={value} 
            readOnly={!isNew}
>>>>>>> 3ae49310352cf5a19d9e7f16387b28f6368563cd
            {...rest}
            />

            <button
            type='button'
            onClick={onClick}
            >
<<<<<<< HEAD
            { $isnew ? <FiPlus /> : <FiX /> }
=======
            { isNew ? <FiPlus /> : <FiX /> }
>>>>>>> 3ae49310352cf5a19d9e7f16387b28f6368563cd
            </button>
        </Container>
    )
}