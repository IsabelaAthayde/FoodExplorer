import { Container } from './styles.js';
import { motion } from 'framer-motion';

import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { useCartContext } from "../../hooks/cart";

import { Icon } from '../Icon';

import Heart from "../../assets/icons/Heart.svg";
import Pencil from "../../assets/icons/Pencil.svg";
import MaskGroup1 from "../../assets/Food/MaskGroup1.png";

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';


export function CardsSlider({isAdmin, data, category}) {
    const { 
        favorites = [],
        addToFavorites,
        productsCart = [],
        incrementProductQuantity,
        addProductsToCart,
        removeProductFromCart
    } = useCartContext();

    const carousel = useRef();

    const [width, setWidth] = useState(0);
    const [count, setCount] = useState(0);
    const [styles, setStyles] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
          }, 1000);
   }, [carousel.current, carousel])

   async function handleSwipeLeft(e) {
       
        if(count < 0) {
            setCount(prev => prev + 80)

            const style = {
                transform: `translateX(${count}px)`,
                transition: "all 0.1s ease"
            }

            setStyles(style)
        } else {
            setCount(0)

            const style = {
                transform: `translateX(${count}px)`,
                transition: "all 0.3s ease"
            }

            setStyles(style)
        }
        console.log(`count:${count}`)
   }

   function handleSwipeRight(e) {

    if(count > (width * -1)) {   
        console.log( `count:${count}`)

        if(count === 0) {
           setCount(-80)
        } else if(count < 0) {
            setCount(prev => prev - 80)
        }
            console.log( `count:${count}`)
           const style = {
               transform: `translateX(${count}px)`,
               transition: "all 0.3s ease"
           }
           console.log( `count:${count}`)
       
           setStyles(style)
    } else {
        setCount(-285)
        const style = {
            transform: `translateX(${count}px)`,
            transition: "all 0.3s ease"
        }
    
        setStyles(style)
    }
    
}

    return (
        <Container  className="container" isAdmin={isAdmin}>
            
            <span>{category}</span>

            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div className='inner'
                drag="x"
                dragConstraints={{right: 0, left: -width}}
                style={styles}
                >
                    {data &&
                    data.map((food) => (
                    <div className='item' key={food.image} onClick={()=> navigate(`/details/${food.id}`)}>

                        <Icon className="favIcon" 
                        src={isAdmin ? Pencil : Heart}
                        style={{
                            filter: `${favorites.find(favoriteProduct => favoriteProduct.id === food.id) 
                            ?  "invert(35%) sepia(100%) saturate(7464%) contrast(134%)": "none"}`
                            }}
                        
                        onClick={(e) => {
                            e.stopPropagation();
                            {!isAdmin ? addToFavorites(food.id) : navigate(`/edit/${food.id}`)}
                        }}
                        />
                        
                        <img className='food' src={`${api.defaults.baseURL}/files/${food.image}`} alt={food.name}/>

                        <span className='dish'>{food.title} <MdKeyboardArrowRight/> </span>
                        <p className='ingredients'>{food.description}</p>
                        <p className='price'>R$ {food.price}</p>
            
                        { isAdmin ? <div style={{display: "none"}}></div> :(
                            <div className="quantity">
                                <a
                                onClick={(e) => {
                                e.stopPropagation();
                                removeProductFromCart(food.id)}}
                                >
                                    <AiOutlineMinus />
                                </a>
                    
                                <span>
                                {productsCart &&
                                    productsCart.find(product => product.id == food.id)?.qtd ?
                                        productsCart.find(product => product.id == food.id)?.qtd
                                        : '0'
                                }
                                </span>
                                <a 
                                onClick={(e) => {
                                e.stopPropagation();
                                incrementProductQuantity(food.id)}}
                                >
                                    <AiOutlinePlus />
                                </a>
                            </div>
                        ) }
            
                        { isAdmin ? <div style={{display: "none"}}></div> : (<button className='add'  
                        onClick={(e) => {
                        e.stopPropagation();
                        addProductsToCart(food.id)}}>Incluir</button>)}
                    
                    </div>
                    ))}
                </motion.div>
                <button className='arrow-left' onClick={(e) => handleSwipeLeft(e)}><MdKeyboardArrowLeft/></button>
                <button className='arrow-right' onClick={(e) => handleSwipeRight(e)}><MdKeyboardArrowRight/></button>
            </motion.div>

        </Container>

    )
}
