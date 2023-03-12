import { Container } from "./styles";
import { Button } from '../../Components/Button';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export function Error() {
    const navigate = useNavigate();

    return (
        <Container>
            <main>
                <form>
                    <Button 
                    type="button" 
                    id="back" 
                    icon={<MdKeyboardArrowLeft />} 
                    text="Voltar" 
                    onClick={()=> navigate(-1)}
                    />
                    <h2 style={{color: "red"}}>401 - Unauthorized</h2>
                    <h2>Acesso negado!! Você não deveria estar acessando essa rota.</h2>
                </form>
            </main>
        </Container>
    )
}