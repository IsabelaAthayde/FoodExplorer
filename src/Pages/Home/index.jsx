import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Footer } from '../../Components/Footer';
import { Header } from "../../Components/Header";
import { CardsSlider } from "../../Components/CardsSlider";

export function Home({isAdmin}) {
    const [meals, setMeals] = useState([]);
    const [desserts, setDesserts] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(()=> {
        async function fetchCategorys() {
            const mealCategory = await api.get(`/meals?category=meal&title=${search}`) 
            setMeals(mealCategory.data)
            
            const dessertsCategory = await api.get(`/meals?category=dessert&title=${search}`) 
            setDesserts(dessertsCategory.data)
            
            const drinksCategory = await api.get(`/meals?category=drink&title=${search}`) 
            setDrinks(drinksCategory.data)
        }
        fetchCategorys()
    }, [search])

    function getSearch(e) {
        setSearch(e)
    }

    return (
        <Container isAdmin={isAdmin}>
            <Header isAdmin={isAdmin} getSearch={getSearch}/>
            <section id="slogan">
                <div id="color_bg">
                    <aside></aside>
                    <div id="text_container">
                        <h3>Sabores inigualáveis</h3>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>
            </section>

            {meals.length === 0 ? <div style={{display: "none"}}></div> : <CardsSlider isAdmin={isAdmin} data={meals} category="Refeições"/> }
            {desserts.length === 0 ? <div style={{display: "none"}}></div> : <CardsSlider isAdmin={isAdmin} data={desserts} category="Sobremesas"/>}
            {drinks.length === 0 ? <div style={{display: "none"}}></div> : <CardsSlider isAdmin={isAdmin} data={drinks} category="Bebidas"/>}

            <Footer/>
        </Container>
    )
}