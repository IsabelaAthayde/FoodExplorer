import { Container } from "./styles";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Footer } from '../../Components/Footer';
import { Button } from '../../Components/Button';
import { Icon } from '../../Components/Icon';
import { Header } from "../../Components/Header";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import MaskGroup1 from "../../assets/Food/MaskGroup1.png";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Receipt from "../../assets/icons/Receipt.svg";


export function Details({isAdmin}) {
    const { useMeal } = useAuth()

    const [mealImage, setMealImage] = useState(null);
    const [meals, setMeals] = useState("");
    const [tags, setTags] = useState(null);
    const [form, setForm] = useState(null);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function fetchDetails(id) {
            const response = await api.get(`/meals/${id}`)
            
            setMeals(response.data)
            setTags(response.data.tags)
            setMealImage(`${api.defaults.baseURL}/files/${response.data.image}`)
        }
        fetchDetails(params.id)
   }, [])


    return (
        <Container isAdmin={isAdmin}>
            <Header isAdmin={isAdmin} />

            <main>
                <Button 
                id="back" 
                icon={<MdKeyboardArrowLeft />} 
                text="Voltar" 
                onClick={() => navigate(-1)}
                />
                <div id="container">
                    <img className="food" loading="lazy"src={mealImage} alt="foto do prato" />
                
                    <div id="info">
                        <span className='dish-name'>{meals.title}</span>
                        <p>{meals.description}</p>

                        <div id="tags-container">
                            {tags &&
                                tags.map((tag) =>( 
                                <span key={tag.id}>{tag.name}</span>
                                ))
                            }
                        </div>

                        <section>
                            {isAdmin ? (
                                <div style={{display: "none"}}></div>
                            ) : (
                                <div className="quantity">
                                    <a><AiOutlineMinus /></a>
                                    <span>01</span>
                                    <a><AiOutlinePlus /></a>
                                </div>
                                
                            )}

                            {isAdmin ? 
                            (
                                <Button text="Editar prato" onClick={() => navigate(`/edit/${24}`)}/>
                            ) : (
                                <Button text={`Pedir - R$ ${meals.price}`} icon={<img src={Receipt}/>}  />
                            )}

                        </section>
                    </div>
                </div>
            </main>

            <Footer/>
        </Container>
    )
}