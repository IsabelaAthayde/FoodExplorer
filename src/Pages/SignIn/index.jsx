import { Container } from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Logo } from "../../Components/Logo";
import { LabeledInput } from "../../Components/LabeledInput";
import { Button } from "../../Components/Button";

export function SignIn() {
    const { signIn } = useAuth();

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const navigate = useNavigate();

    function handleSignIn() {
        signIn({email, password})
    }
    
    return (
        <Container onKeyDown={(e) => {if(e.key === 'Enter') { handleSignIn() } }}>
            <Logo/>

            <section id="login">
                <h2>Faça Login</h2>
                <LabeledInput name="input"
                label="Email" 
                type="text" 
                placeholder="Exemplo: exemplo@exemplo.com.br" 
                onChange={e => setEmail(e.target.value)}
                />
                
                <LabeledInput name="input"
                label="Senha" 
                type="text" 
                placeholder="No mínimo 6 caracteres" 
                onChange={e => setPassword(e.target.value)}
                />

                <Button text="Entrar"  onClick={handleSignIn}/>
                <button id="nav" onClick={() => navigate("/register")}>Criar Conta</button>
            </section>
            
        </Container>
    )                        
}