import { Container } from "./styles";
import { Footer } from '../../Components/Footer';

import { Header } from "../../Components/Header";

import { useCartContext } from "../../hooks/cart";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import { TagItem } from "../../Components/TagItem";

import { LabeledInput } from "../../Components/LabeledInput";
import { Button } from "../../Components/Button";
import { OptionsMenu } from "../../Components/OptionsMenu";
import { Icon } from "../../Components/Icon";
import { api } from '../../services/api.js';
import { BsSearch } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";

export function Config({isAdmin, productsCart}) {
    const [addCard, setAddCard] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [birth, setBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [street, setStreet] = useState('');
    const [streetNumber, setStreetNumber] = useState(null);
    const [neighborhood, setNeighborhood] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');

    const [cardName, setCardName] = useState('');
    const [ brand, setBrand ] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');

    function treatDatas(expiry, cardNumber) {
        let year = String(expiry).match(/\d{2}$/)[0];

        const todaysYear = String(new Date().getFullYear());

        if(year < todaysYear.match(/\d{2}$/)[0]) {
            alert('Validade do cartão expirada, use um cartão válido!')
            return;
        }

        let expiration_year = `${todaysYear.match(/\d{2}/)[0] + year}`;
        let expiration_month = String(expiry).match(/\d{2}/)[0];
        let treatedCardNumber = String(cardNumber).split(' ').join('');

        return {expiration_year, expiration_month, treatedCardNumber}
    }

    function handlePayWithCard() {
        const newData = treatDatas(expiry, cardNumber)

        if(!newData.expiration_month && !newData.expiration_year) {
            alert('Erro ao enviar data de expiração, verifique se os dados estão corretos!')
            return;
        }
        
        let data = {
            street,
            number: streetNumber,
            neighborhood,
            zipcode,
            city,
            state,
            name: cardName,
            email,
            cpf,
            birth,
            phone_number: phoneNumber,
            brand,
            cardNumber: newData.treatedCardNumber,
            expiration_month: newData.expiration_month,
            expiration_year: newData.expiration_year,
            cvc
        }

        // let items = productsCart?.map((product) => (
        //     {
        //         name: product.title,
        //         value: Number(String(product.price).split('.').join("")),
        //         amount: product.qtd,
        //     }
        // ))

        if(!data /*&& !items*/) {
           alert("Dados em falta, verifique os dados a serem enviados")
           return
        }

        for(const info in data) {
            if(data[info] == 'default') {
                alert(`Não foi possível identificar a bandeira do cartão, por favor reescreva o número do cartão`)
                return
            }
            if(!data[info]) {
                alert(`${info} não preenchido, verifique os dados a serem enviados`)
                return
            }
        }

        console.log(`todos os dados estão corretos.\n ${data}`)
        // api.post('/pay/card', {data, items})
    }

    const navigate = useNavigate();

    return (
        <Container $isAdmin={isAdmin}>
            <Header $isAdmin={isAdmin} />

            <main>
                <h1>Configurações</h1>
                
                { addCard == false  ? 
                <OptionsMenu 
                h2="Seus Cartões"
                className="block"
                text="Adicionar Cartão"
                onClick={()=>{setAddCard(true)}}
                /> :
                <div className='content-wrapper'>
                    <section>
                        <span onClick={() => setAddCard(false)}><FaArrowLeft/>Voltar</span>
                        <h2>Dados Pessoais</h2>

                        <LabeledInput 
                        label="Nome" 
                        type="text"
                        name='name'
                        placeholder="nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                        <LabeledInput 
                        label="Email" 
                        type="text"
                        name='email'
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                        <LabeledInput 
                        label="CPF" 
                        type="text"
                        name='cpf'
                        placeholder="000.000.000-00"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        />
                        <div className="flex-container">
                            <LabeledInput 
                            label="Data de Nascimento" 
                            type="text"
                            name='birth'
                            placeholder="yyyy/mm/dd"
                            value={birth}
                            onChange={(e) => setBirth(e.target.value)}
                            />
                            <LabeledInput 
                            label="Número de Celular" 
                            type="text"
                            name='phoneNumber'
                            placeholder="(00) 00000-0000"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                    </section>
                    <section>
                        <h2>Endereços</h2>

                        <div className="flex-container">

                        <LabeledInput 
                        label="Rua" 
                        type="text"
                        name='street'
                        placeholder="Avenida Brasil"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                        className='street'
                        />
                        
                        <LabeledInput 
                        label="Número" 
                        type="number"
                        name='streetNumber'
                        placeholder=""
                        value={streetNumber}
                        onChange={(e) => setStreetNumber(e.target.value)} 
                        className='streetNumber'
                        />
                        </div>

                        <LabeledInput 
                        label="Bairro" 
                        type="text"
                        name='neighborhood'
                        placeholder=""
                        value={neighborhood}
                        onChange={(e) => setNeighborhood(e.target.value)}
                        />
                        
                        <LabeledInput 
                        label="CEP" 
                        type="text"
                        name='zipcode'
                        placeholder="00000-000"
                        value={zipcode}
                        onChange={(e) => setZipcode(e.target.value)}
                        />
                        <div className="flex-container">
                        <LabeledInput 
                        label="Cidade" 
                        type="text"
                        name='city'
                        placeholder="Ex: Rio de Janeiro"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className='city'
                        />
                        <LabeledInput 
                        label="Estado" 
                        type="text"
                        name='state'
                        placeholder="Ex: RJ"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className='state'
                        />
                        </div>
                    </section>

                    <section>
                        <h2>Forma de Pagamento</h2>

                        <LabeledInput 
                        label="Nome escrito no cartão" 
                        type="text"
                        name='cardName'
                        placeholder="nome escrito no cartão"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        />
                        <LabeledInput 
                        label="Número do Cartão" 
                        type="text"
                        name='number'
                        mask="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        value={cardNumber}
                        onChange={(e) => { 
                            setCardNumber(e.target.value) 
                            setBrand(e.target.attributes.cardtype.value)}}
                        />
                        <div className="flex-container">
                            <LabeledInput 
                            label="Validade" 
                            type="text"
                            mask="expiry"
                            name='expiry'
                            placeholder="04/25"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            />

                            <LabeledInput 
                            label="CVC" 
                            type="text"
                            mask="cvc"
                            name='cvc'
                            placeholder="0000"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            />
                        </div>
                    </section>
                    <Button type='button' text="Salvar" onClick={(e) => handlePayWithCard()}/>
                </div> 
                }
            </main>
            
            <Footer/>
        </Container>
    )
}