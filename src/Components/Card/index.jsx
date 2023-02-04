import { Container } from './styles';

import { Icon } from '../Icon';

import Heart from "../../assets/icons/Heart.svg";
import Pencil from "../../assets/icons/Pencil.svg";
import MaskGroup1 from "../../assets/Food/MaskGroup1.png";

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';


export function Card({ isAdmin}) {
    return (
        <Container className="card">
            <Icon className="favIcon" src={isAdmin ? Pencil : Heart} />
            <img className="food" src={MaskGroup1} alt="" />
            <span className='dish'>Salada Ravanello <MdKeyboardArrowRight/> </span>
            <p>R$ 49,97</p>

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
