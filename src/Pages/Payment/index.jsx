import { Container } from "./styles";
import { Footer } from '../../Components/Footer';

import { Header } from "../../Components/Header";
import { Icon } from "../../Components/Icon";

import MaskGroup1 from "../../assets/Food/MaskGroup1.png";
import CreditCard from "../../assets/icons/CreditCard.svg";
import PIX from "../../assets/icons/PIX.svg";
import qrcode from "../../assets/qrcode.png";


export function Payment({isAdmin}) {
    return (
        <Container isAdmin={isAdmin}>
            <Header isAdmin={isAdmin} />

            <main>
                <section id="my-orders">
                    <h2>Meu Pedido</h2>
                    <div id='container'>
                        <div className="order">
                            <img className="food" src={MaskGroup1} alt="" />

                            <aside>
                                <h3>1 X Salada Radish <span className="price">R$ 25,97</span></h3>
                                <span>Excluir</span>
                            </aside>
                        </div>
                        <div className="order">
                            <img className="food" src={MaskGroup1} alt="" />

                            <aside>
                                <h3>1 X Salada Radish <span className="price">R$ 25,97</span></h3>
                                <span>Excluir</span>
                            </aside>
                        </div>
                    </div>

                    <h4>Total: R$ 103,88</h4>
                </section>

                <section id="payment">
                    <h2>Pagamento</h2>

                    <div id="pay-container">
                        <div id="options">
                            <button><Icon src={PIX} /> PIX</button>
                            <button><Icon src={CreditCard} /> Crédito</button>
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