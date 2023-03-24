import { useCartContext } from "../../hooks/cart";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import { api } from "../../services/api";

import { Container } from "./styles";
import { Footer } from '../../Components/Footer';

import { Header } from "../../Components/Header";
import { LabeledInput } from "../../Components/LabeledInput";
import { CreditCardForm } from "../../Components/CreditCardForm";
import { Button } from "../../Components/Button";
import { Icon } from "../../Components/Icon";

import CreditCard from "../../assets/icons/CreditCard.svg";
import PIX from "../../assets/icons/PIX.svg";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export function Payment({isAdmin}) {
    const { productsCart,
            removeProductFromCart
          } = useCartContext();

    const [ total, setTotal ] = useState(0);
    const [ width, setWidth ] = useState(undefined);
    const [ goToPay, setGoToPay ] = useState(undefined);
    const [ pixOption, setPixOption ] = useState(true);
    const [ qrcode, setQrcode ] = useState('');
    const [ copyText, setCopyText ] = useState('');


    const navigate = useNavigate();

    useEffect(() => {
        function calculateTotal() {
            let tot = 0;
            for(let i = 0; i < productsCart.length; i++) {
                tot = tot + (productsCart[i].price * productsCart[i].qtd)
            }
            setTotal(tot.toFixed(2))
        }
        calculateTotal()
    }, [removeProductFromCart])
    
    useEffect(() => {
        function getScreenWidth() {
            setWidth(window.innerWidth)
            {window.innerWidth < 768 ? setGoToPay(false) : setGoToPay(true)}
        }
        getScreenWidth()
    }, [width, window.innerWidth])

    useEffect(() => {
        async function fetchQrCode() {
            if(total) {
                const response = await api.post('/pay', {price: total})
                setQrcode(response.data[0].imagemQrcode)
                setCopyText(response.data[0].qrcode)
            }
        }
        fetchQrCode()
    }, [total])

    async function handlePayWithCard(data) {
        // let expiration_month = String(expiry).match(/\d{2}/)[0];
        // let expiration_year = String(expiry).match(/\d{2}$/)[0];

        // if(!expiration_month && !expiration_year) {
        //     alert('Erro ao enviar data de expiração, verifique se os dados estão corretos!')
        //     return;
        // }
        // const cardRes = await api.post("/pay/card", {
        // brand,
        // number,
        // cvv: cvc,
        // expiration_month,
        // expiration_year
        // })

        //  const cardRes = await api.post("/pay/card", data)
    } 

return (
    <Container isAdmin={isAdmin}>
        <Header isAdmin={isAdmin} />

        <Button 
        id="back" 
        icon={<MdKeyboardArrowLeft />} 
        text="Voltar" 
        onClick={() => navigate(-1)}
        />
        <main>
            { width > 768 || goToPay === false && width < 768?  
            <section id="my-orders">
                <h2>Meu Pedido</h2>
                <div id='container'>
                    {productsCart &&
                        productsCart.map((product) => (
                            <div className="order" key={`div-${product.id}`}>
                                <img  key={`img-${product.id}`} className="food" src={product.image} alt="imagem da comida" />

                                <aside key={`as-${product.id}`}>
                                    <h3 key={`h3-${product.id}`}>{product.qtd} X {product.title} </h3>
                                    <span className="price">R$ {product.price}</span>
                                    <span className="delete" key={`span-${product.id}`} onClick={() => removeProductFromCart(product.id)}>Excluir</span>
                                </aside>
                            </div>
                        ))
                    }
                </div>

                
                {
                    width > 768 ? <h4>Total: R$ {Number(total)}</h4> : (<h4>Total: R$ {Number(total)}</h4>, <Button text="Avançar" onClick={()=> setGoToPay(true)}/>)
                }
                
            </section>
           : undefined }

            { width > 768 || goToPay === true && width < 768 ? 
            <section id="payment">
                <h2>Pagamento</h2>

                <div id="pay-container">
                    <div id="options">
                        <Icon src={PIX} onClick={() => setPixOption(true)}> PIX </Icon>
                        <Icon src={CreditCard} onClick={() => setPixOption(false)}> Crédito </Icon>
                    </div>

                    <div id="img-container">
                        { pixOption === true ? (
                        <div id="pix-container">
                            <img src={qrcode} alt="qr code"/> 
                            <a onClick={() => {navigator.clipboard.writeText(copyText)}}>Copiar código</a>
                        </div>
                        ) : 
                        (   
                        <CreditCardForm productsCart={productsCart}/>
                        )}
                    </div>
                    
                </div>

            </section> : undefined}
        </main>
        
        <Footer/>
    </Container>
)
}