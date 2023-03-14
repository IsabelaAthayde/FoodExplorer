import { Container } from "./styles";
import { Footer } from '../../Components/Footer';

import { Header } from "../../Components/Header";
import { Icon } from "../../Components/Icon";

import CreditCard from "../../assets/icons/CreditCard.svg";
import PIX from "../../assets/icons/PIX.svg";
import qrcode from "../../assets/qrcode.png";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useCartContext } from "../../hooks/cart";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";

export function Payment({isAdmin}) {
    const { productsCart,
            removeProductFromCart
          } = useCartContext();

    const [ total, setTotal ] = useState(0)

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

    return (
        <Container isAdmin={isAdmin}>
            <Header isAdmin={isAdmin} />

                <button
                id="back" 
                icon={<MdKeyboardArrowLeft />}
                onClick={() => navigate(-1)}
                >Voltar</button>
            <main>
                <section id="my-orders">
                    <h2>Meu Pedido</h2>
                    <div id='container'>
                        {productsCart &&
                            productsCart.map((product) => (
                                <div className="order" key={`div-${product.id}`}>
                                    <img  key={`img-${product.id}`} className="food" src={product.image} alt="imagem da comida" />

                                    <aside key={`as-${product.id}`}>
                                        <h3 key={`h3-${product.id}`}>{product.qtd} X {product.title} <span className="price">R$ {product.price}</span></h3>
                                        <span key={`span-${product.id}`} onClick={() => removeProductFromCart(product.id)}>Excluir</span>
                                    </aside>
                                </div>
                            ))
                        }
                    </div>

                    <h4>Total: R$ {Number(total)}</h4>
                </section>

                <section id="payment">
                    <h2>Pagamento</h2>

                    <div id="pay-container">
                        <div id="options">
                            <Icon src={PIX}> PIX </Icon>
                            <Icon src={CreditCard}> Crédito </Icon>
                        </div>

                        <div id="img-container">
                             <img src={qrcode} alt="qr code"/>
                        </div>
                       
                    </div>

                </section>
            </main>
            
            <Footer/>
        </Container>
    )
}