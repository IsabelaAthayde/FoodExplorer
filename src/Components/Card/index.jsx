import { Container } from './styles';

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Icon } from '../Icon';

import Heart from "../../assets/icons/Heart.svg";
import Pencil from "../../assets/icons/Pencil.svg";
import MaskGroup1 from "../../assets/Food/MaskGroup1.png";

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';


export function Card({isAdmin, data}) {
    const [mealImage, setMealImage] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function showImage() {
            setMealImage(`${api.defaults.baseURL}/files/${data.image}`)
        }
       showImage()
   }, [])

    return (
        <Container className="card" isAdmin={isAdmin} onClick={() => navigate(`/details/${data.id}`)}>
        
            <Icon className="favIcon" 
            src={isAdmin ? Pencil : Heart} 
            onClick={(e) => {
                e.stopPropagation();
                navigate(`/edit/${data.id}`)}}
            />
            
            <img className="food" src={mealImage} alt="imagem do prato" />
            <span className='dish'>{data.title} <MdKeyboardArrowRight/> </span>
            <p className='ingredients'>{data.description}</p>
            <p className='price'>{data.price}</p>

            { isAdmin ? <div style={{display: "none"}}></div> :(
                <div className="quantity">
                    <a><AiOutlineMinus /></a>
                    <span>01</span>
                    <a><AiOutlinePlus /></a>
                </div>
            ) }

            { isAdmin ? <div style={{display: "none"}}></div> : (<button className='add'>Incluir</button>)}
        
        </Container>
    )
}
