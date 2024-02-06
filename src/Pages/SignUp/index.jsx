import { Container } from "./styles";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import { Logo } from "../../Components/Logo";
import { LabeledInput } from "../../Components/LabeledInput";
import { Button } from "../../Components/Button";
import { api } from "../../services/api";

export function SignUp() {
    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');

    const navigate = useNavigate();
    
    function handleSignUp() {

        if(!name || !email || !password) {
            alert('Preencha todos os campos')
            return;
        }

        api.post('/users', {name, email, password})
        .then(() => {
          alert('Usuário cadastrado com sucesso') 
          navigate("/") 
        })
        .catch(error => {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Não possível cadastrar")
            }
        })
    }

    return (
        <Container>
            <Logo/>

            <section id="create">
                <h2>Crie sua conta</h2>
                <LabeledInput 
                label="Seu nome" 
                type="text" placeholder="Exemplo: Maria da Silva"
                onChange={e => setName(e.target.value)} 
                />

                <LabeledInput 
                label="Email" 
                type="text" 
                placeholder="Exemplo: exemplo@exemplo.com.br"
                onChange={e => setEmail(e.target.value)}
                />
                
                <LabeledInput 
                label="Senha" 
                type="text" 
                placeholder="No mínimo 6 caracteres"
                onChange={e => setPassword(e.target.value)} 
                />

                <Button text="Criar Conta" onClick={handleSignUp}/>
                <button id="nav" onClick={() => navigate(-1)}>Já tenho uma Conta</button>
            </section>
            
        </Container>
    )
}