import { Container } from "./styles";

import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { Footer } from '../../Components/Footer';
import { LabeledInput } from '../../Components/LabeledInput';
import { Icon } from '../../Components/Icon';
import { BsSearch } from 'react-icons/bs';

import Close from "../../assets/icons/Close.svg";

export function Menu({isAdmin}) {
    const { signOut } = useAuth();

    const [search, setSearch] = useState("");
    const [meals, setMeals] = useState([]);

    const navigate = useNavigate();

    function handleSignOut() {
        signOut();
        navigate("/")
    }

    useEffect(()=> {
        async function fetchSearch() {
            const response = await api.get(`/meals?title=${search}`) 
            setMeals(response.data) 
        }
        fetchSearch()
    }, [search])

    return (
        <Container isAdmin={isAdmin}>
            <header>
                <Icon src={Close} onClick={() => navigate(-1)}/>
                Menu
            </header>

            <LabeledInput 
            name="search"
            icon={<BsSearch/>} 
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
            />
            
            { isAdmin ? (
            <section className="handleButtons">
                <a onClick={() => navigate("/new")}>Novo prato</a>
                <a onClick={handleSignOut}>Sair</a>
            </section>) 
            : 
            (
            <section className="handleButtons">
                <a  onClick={() => navigate("/favorites")}>Meus Favoritos</a>
                <a onClick={handleSignOut}>Sair</a>
            </section>
            )} 

            <section id="list-search">
                {search &&
                    meals.map(meal => (
                        <div className="order" key={`div-${meal.id}`} >
                            <img  key={`img-${meal.id}`} className="food" src={`${api.defaults.baseURL}/files/${meal.image}`} alt="imagem da comida" />

                            <aside key={`as-${meal.id}`}>
                                <h3 key={`h3-${meal.id}`}>{meal.title} </h3>
                                <span className="price">R$ {meal.price}</span>
                                <span className="details" onClick={() => navigate(`/details/${meal.id}`)}>Clique aqui para ver os detalhes</span>
                            </aside>
                        </div>
                    ))
                }
            </section>

            <Footer/>
        </Container>
    )
}