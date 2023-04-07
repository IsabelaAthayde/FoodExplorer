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
    const [ pixOption, setPixOption ] = useState(undefined);
    const [ qrcode, setQrcode ] = useState('');
    const [ copyText, setCopyText ] = useState('');

    const [ cobData, setCobData ] = useState([]);


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

    async function handlePayWithPix() {
        if(total && total != 0) {
            const response = await api.post('/pay', {price: total, productsCart})
            setQrcode(response.data[0].imagemQrcode)
            setCopyText(response.data[0].qrcode)

            let newCob = response.data[1]
            
            setCobData([...cobData, newCob])
            localStorage.setItem('@foodexplorer:cobs', JSON.stringify(cobData))
        }
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
                                <img  loading="lazy" key={`img-${product.id}`} className="food" src={product.image} alt="imagem da comida" />

                                <aside key={`as-${product.id}`}>
                                    <h3 key={`h3-${product.id}`}>{product.qtd} X {product.title} </h3>
                                    <span className="price">R$ {product.price}</span>
                                    <span className="delete" key={`span-${product.id}`} onClick={async() => {
                                        await removeProductFromCart(product.id) 
                                        if(total != 0) {
                                            handlePayWithPix()
                                        }
                                    }}>Excluir</span>
                                </aside>
                            </div>
                        ))
                    }
                </div>

                
                {
                    width > 768 ? <h4>Total: R$ {Number(total)}</h4> : (
                    <h4>Total: R$ {Number(total)}</h4>,
                    <Button text="Avançar" onClick={()=> {
                        setGoToPay(true)
                    }}/>)
                }
                
            </section>
           : undefined }

            { width > 768 || goToPay === true && width < 768 ? 
            <section id="payment">
                <h2>Selecione a forma de pagamento</h2>

                <div id="pay-container">
                    <div id="options">
                        <Icon src={PIX} onClick={() => {
                            setPixOption(true)
                            handlePayWithPix()
                        }}
                        style={pixOption ? {filter: "invert(53%) sepia(10%) saturate(7471%) hue-rotate(85deg) brightness(120%) contrast(125%)"} : {} }
                        > PIX </Icon>
                        <Icon src={CreditCard} onClick={() => setPixOption(false)}
                        style={!pixOption ? {filter: "invert(53%) sepia(10%) saturate(7471%) hue-rotate(85deg) brightness(120%) contrast(125%)"} : {} }
                        > Crédito </Icon>
                    </div>

                    <div id="img-container">
                        { pixOption === true ? (
                            total == 0 ?  <h2>Carrinho Vazio</h2> : 
                            (<div id="pix-container">
                                <img loading="lazy" src={qrcode} alt="qr code"/>
                                <a onClick={() => {navigator.clipboard.writeText(copyText)}}>Copiar código</a>
                            </div>)
                        ) : 
                        (  total == 0 ?  <h2>Carrinho Vazio</h2> :  
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