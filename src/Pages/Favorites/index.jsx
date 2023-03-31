import { Container } from "./styles";
import { Footer } from '../../Components/Footer';

import { Header } from "../../Components/Header";

import { useCartContext } from "../../hooks/cart";
import { useNavigate } from 'react-router-dom';

export function Favorites({isAdmin}) {
    const {favorites = [],
        addToFavorites, } = useCartContext();

    const navigate = useNavigate();

    return (
        <Container isAdmin={isAdmin}>
            <Header isAdmin={isAdmin} />

            <main>
                <h2>Meus Favoritos</h2>

                <section>
                    {favorites &&
                    favorites.map(product => ( 
                    <div key={product.id} onClick={() => navigate(`/details/${product.id}`)}>
                        <img className="food" src={product.image} alt="" />

                        <aside>
                            <h3>{product.title}</h3>
                            <span onClick={(e) => {e.stopPropagation(); addToFavorites(product.id)}}>Remover dos Favoritos</span>
                        </aside>
                    </div>
                    ))
                    }
                </section>
            </main>
            
            <Footer/>
        </Container>
    )
}