import { Container } from "./styles";

import { Logo } from "../../Components/Logo";
import { LabeledInput } from "../../Components/LabeledInput";
import { Button } from "../../Components/Button";

export function SignIn() {
    return (
        <Container>
            <Logo/>

            <section id="login">
                <h2>Faça Login</h2>
                <LabeledInput label="Email" type="text" placeholder="Exemplo: exemplo@exemplo.com.br" />
                
                <LabeledInput label="Senha" type="text" placeholder="No mínimo 6 caracteres" />

                <Button text="Entrar"/>
                <button id="nav">Criar Conta</button>
            </section>
            
        </Container>
    )
}