import { Container } from "./styles";
import { Footer } from '../../Components/Footer';
import { HeaderMobile } from "../../Components/Header/Mobile";
import { Meals } from "../../Components/Meals";
import { HeaderDesktop } from "../../Components/Header/Desktop";

import pngegg from "../../assets/pngegg.svg";


export function Home() {
    return (
        <Container>
            <HeaderMobile />
            <section id="slogan">
                <div id="color_bg">
                    <img src={pngegg} />
                    <div id="text_container">
                        <h3>Sabores inigualáveis</h3>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>
            </section>
            <Meals title="Refeições" />
            <Meals title="Pratos principais" />
            <Meals title="Bebidas" />

            <Footer/>
        </Container>
    )
}