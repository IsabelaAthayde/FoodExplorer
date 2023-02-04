import { Container } from "./styles";
import { Footer } from '../../Components/Footer';
import { HeaderMobile } from "../../Components/Header/Mobile";
import { Meals } from "../../Components/Meals";
import { HeaderDesktop } from "../../Components/Header/Desktop";

import sloganSmall from "../../assets/sloganSmall.svg";
import Slide from '../../Components/Slide';

export function Home({isAdmin}) {
    return (
        <Container isAdmin={isAdmin}>
            <HeaderMobile isAdmin={isAdmin} />
            <section id="slogan">
                <div id="color_bg">
                    <img src={sloganSmall} />
                    <div id="text_container">
                        <h3>Sabores inigualáveis</h3>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>
            </section>
            {/* <Meals isAdmin={isAdmin}  title="Refeições" /> */}
            <Meals isAdmin={isAdmin}  title="Refeições" >
                <Slide />
            </Meals>

            <Meals isAdmin={isAdmin}  title="Refeições" >
                <Slide />
            </Meals>

            <Meals isAdmin={isAdmin}  title="Refeições" >
                <Slide />
            </Meals>
            

            <Footer/>
        </Container>
    )
}