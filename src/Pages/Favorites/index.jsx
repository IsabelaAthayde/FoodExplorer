import { Container } from "./styles";
import { Footer } from '../../Components/Footer';

import { Header } from "../../Components/Header";

import MaskGroup1 from "../../assets/Food/MaskGroup1.png";


export function Favorites({isAdmin}) {
    return (
        <Container isAdmin={isAdmin}>
            <Header isAdmin={isAdmin} />

            <main>
                <h2>Meus Favoritos</h2>

                <section>
                    <div>
                        <img className="food" src={MaskGroup1} alt="" />

                        <aside>
                            <h3>Salada Radish</h3>
                            <span>Remover dos Favoritos</span>
                        </aside>
                    </div>
                    <div>
                        <img className="food" src={MaskGroup1} alt="" />

                        <aside>
                            <h3>Salada Radish</h3>
                            <span>Remover dos Favoritos</span>
                        </aside>
                    </div>

                    <div>
                        <img className="food" src={MaskGroup1} alt="" />

                        <aside>
                            <h3>Salada Radish</h3>
                            <span>Remover dos Favoritos</span>
                        </aside>
                    </div>
                    <div>
                        <img className="food" src={MaskGroup1} alt="" />

                        <aside>
                            <h3>Salada Radish</h3>
                            <span>Remover dos Favoritos</span>
                        </aside>
                    </div>
                </section>
            </main>
            
            <Footer/>
        </Container>
    )
}