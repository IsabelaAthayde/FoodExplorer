import { Container } from "./styles";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { api } from "../../services/api";
import { useCartContext } from "../../hooks/cart";

import { Footer } from '../../Components/Footer';
import { Button } from '../../Components/Button';
import { Icon } from '../../Components/Icon';
import { Header } from "../../Components/Header";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Receipt from "../../assets/icons/Receipt.svg";


export function Details({isAdmin}) {
    const { productsCart = [],
        incrementProductQuantity,
        addProductsToCart,
        removeProductFromCart
    } = useCartContext();


    const [mealImage, setMealImage] = useState(null);
    const [meals, setMeals] = useState("");
    const [tags, setTags] = useState(null);

    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        async function fetchDetails(id) {
            const response = await api.get(`/meals/${id}`)
            
            setMeals(response.data)
            setTags(response.data.tags)
            setMealImage(`${api.defaults.baseURL}/files/${response.data.image}`)

            console.log(productsCart)
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
                                <Button 
                                type="button"
                                text="Editar prato"
                                />
                            ) : (
                                <div className="quantity">
                                    <a onClick={(e) => {
                                        removeProductFromCart(meals.id) 
                                    }}><AiOutlineMinus /></a>
                                    <span>
                                    {productsCart &&
                                    productsCart.find(product => product.id == params.id)?.qtd ?
                                      productsCart.find(product => product.id == params.id)?.qtd
                                      : '0'
                                    }
                                    </span>
                                    <a 
                                    onClick={(e) => {
                                        incrementProductQuantity(meals.id) 
                                    }}
                                    ><AiOutlinePlus /></a>
                                </div>
                                
                            )}

                            {isAdmin ? 
                            (
                                <Button text="Editar prato" onClick={() => navigate(`/edit/${meals.id}`)}/>
                            ) : (
                                <Button onClick={addProductsToCart} text={`Pedir - R$ ${meals.price}`} icon={<img src={Receipt}/>}  />
                            )}

                        </section>
                    </div>
                </div>
            </main>

            <Footer/>
        </Container>
    )
}