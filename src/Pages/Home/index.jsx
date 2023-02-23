import { Container } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Footer } from '../../Components/Footer';
import { Header } from "../../Components/Header";
import { Meals } from "../../Components/Meals";

import Slide from '../../Components/Slide';

export function Home({isAdmin}) {
    const [meals, setMeals] = useState([]);
    const [mainDishes, setMainDishes] = useState([]);
    const [drinks, setDrinks] = useState([]);

    useEffect(()=> {
        async function fetchCategorys() {
            const mealCategory = await api.get(`/meals?category=meal`) 
            setMeals(mealCategory.data)
        
            const mainDishesCategory = await api.get(`/meals?category=main-dish`) 
            setMainDishes(mainDishesCategory.data)
            
            const drinksCategory = await api.get(`/meals?category=drink`) 
            setDrinks(drinksCategory.data)
        }
        fetchCategorys()
    }, [])

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
            
            <Meals isAdmin={isAdmin} title="Refeições" >
                <Slide isAdmin={isAdmin} category={meals}/>
            </Meals>

            <Meals isAdmin={isAdmin}  title="Pratos Principais" >
                <Slide isAdmin={isAdmin} category={mainDishes}/>
            </Meals>

            <Meals isAdmin={isAdmin}  title="Bebidas" >
                <Slide isAdmin={isAdmin} category={drinks}/>
            </Meals>
            

            <Footer/>
        </Container>
    )
}