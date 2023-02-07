import { Container } from "./styles";
import { Footer } from '../../Components/Footer';
import { Header } from "../../Components/Header";
import { Meals } from "../../Components/Meals";
import { HeaderDesktop } from "../../Components/Header/Desktop";

import Slide from '../../Components/Slide';

export function Home({isAdmin}) {
    return (
        <Container isAdmin={isAdmin}>
            <Header isAdmin={isAdmin} />
            <section id="slogan">
                <div id="color_bg">
                    <aside></aside>
                    <div id="text_container">
                        <h3>Sabores inigualáveis</h3>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>
            </section>
            
            <Meals isAdmin={isAdmin}  title="Refeições" >
                <Slide isAdmin={isAdmin}/>
            </Meals>

            <Meals isAdmin={isAdmin}  title="Refeições" >
                <Slide isAdmin={isAdmin}/>
            </Meals>

            <Meals isAdmin={isAdmin}  title="Refeições" >
                <Slide isAdmin={isAdmin}/>
            </Meals>
            

            <Footer/>
        </Container>
    )
}