import { Container } from './styles.js';
import { motion, useAnimation } from 'framer-motion';

import { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { useCartContext } from "../../hooks/cart";

import { Icon } from '../Icon';

import Heart from "../../assets/icons/Heart.svg";
import Pencil from "../../assets/icons/Pencil.svg";

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
    const animation = useAnimation();

    const [width, setWidth] = useState(0);
    const [count, setCount] = useState(0);

    const [singleWidth, setSingleWidth] = useState(undefined);
    const [slidesWidth, setSlidesWidth] = useState(undefined);
    const [containerWidth, setContainerWidth] = useState(undefined);

    const navigate = useNavigate();

    useEffect(() => {
        const slider = carousel.current;
        let slidesWidth = 0;

            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

            Array.from(slider.children).forEach((slide) => {
                const slideWidth = slide.clientWidth;
                const slideMargin = 40;
                slidesWidth += slideWidth + slideMargin;
            })

            setSlidesWidth(slidesWidth)
            setContainerWidth(slider.clientWidth);
            setSingleWidth(slider.children[0].clientWidth);
   }, [carousel.current, carousel])

   function handleLeftArrow() {
    const xPos = getTranslateXValue(carousel.current);
    const newXposition = xPos + singleWidth;
    const constraint = +20;

    animation.start({
        x: newXposition > constraint ? constraint : newXposition,
    });

   }

   function handleRightArrow() {
    const xPos = getTranslateXValue(carousel.current);
    const newXposition = xPos - singleWidth;
    const constraint = containerWidth - slidesWidth + 40;
  
    animation.start({
        x: newXposition < constraint ? constraint : newXposition,
    });

   }

   function getTranslateXValue(element) {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    console.log(matrix.m41)
    return matrix.m41;
    // const transform = element.style.transform;

    // if(!transform || transform.indexOf("translate3d(") < 0 ) {
    //     return 0
    // }

    // const extractTranslateX = transform.match(/translate3d\((-?\d+)/)

    // return extractTranslateX && extractTranslateX.length === 2 ? parseInt(extractTranslateX[1], 10) : 0
   }

    return (
        <Container  className="container" isAdmin={isAdmin}>
            
            <span>{category}</span>

            <motion.div  className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div
                ref={carousel} 
                className='inner'
                drag="x"
                animate={animation}
                initial={false}
                style={{x: 0}}
                dragConstraints={{right: +20, left: containerWidth - slidesWidth + 40}}
                >
                    {data &&
                    data.map((food) => (
                    <div className='item' key={food.image} onClick={()=> navigate(`/details/${food.id}`)}>

                        <Icon className="favIcon" 
                        src={isAdmin ? Pencil : Heart}
                        style={isAdmin ? {} : {
                            filter: `${favorites.find(favoriteProduct => favoriteProduct.id === food.id) 
                            ?  "invert(35%) sepia(100%) saturate(7464%) contrast(134%)": "none"}`
                            }}
                        
                        onClick={(e) => {
                            e.stopPropagation();
                            {!isAdmin ? addToFavorites(food.id) : navigate(`/edit/${food.id}`)}
                        }}
                        />
                        
                        <img className='food' loading="lazy" src={`${api.defaults.baseURL}/files/${food.image}`} alt={food.name}/>

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
                <button className='arrow-left' onClick={(e) => handleLeftArrow()}><MdKeyboardArrowLeft/></button>
                <button className='arrow-right' onClick={(e) => handleRightArrow()}><MdKeyboardArrowRight/></button>
            </motion.div>

        </Container>

    )
}
