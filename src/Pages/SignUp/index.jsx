import { Container } from "./styles";

import { Logo } from "../../Components/Logo";
import { LabeledInput } from "../../Components/LabeledInput";
import { Button } from "../../Components/Button";

export function SignUp() {
    return (
        <Container>
            <Logo/>

            <section id="create">
                <h2>Crie sua conta</h2>
                <LabeledInput label="Seu nome" type="text" placeholder="Exemplo: Maria da Silva" />

                <LabeledInput label="Email" type="text" placeholder="Exemplo: exemplo@exemplo.com.br" />
                
                <LabeledInput label="Senha" type="text" placeholder="No mínimo 6 caracteres" />

                <Button text="Criar Conta"/>
                <button id="nav">Já tenho uma Conta</button>
            </section>
            
        </Container>
    )
}