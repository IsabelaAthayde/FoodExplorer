import { Container } from './styles';

import { Icon } from '../Icon';

import Heart from "../../assets/icons/Heart.svg";
import MaskGroup1 from "../../assets/Food/MaskGroup1.png";

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';


export function Meals({title}) {
    return (
        <Container className="slider">
            <strong>{title}</strong>
            <div className="cards-container">
                <div className="card">
                    <Icon className="favIcon" src={Heart} />
                    <img className="food" src={MaskGroup1} alt="" />
                    <span className='dish'>Salada Ravanello <MdKeyboardArrowRight/> </span>
                    <p>R$ 49,97</p>

                    <div className="quantity">
                        <a><AiOutlineMinus /></a>
                        <span>01</span>
                        <a><AiOutlinePlus /></a>
                    </div>

                    <button>Incluir</button>
                </div>

                <div className="card">
                    <Icon className="favIcon" src={Heart} />
                    <img className="food" src={MaskGroup1} alt="" />
                    <span className='dish'>Salada Ravanello <MdKeyboardArrowRight/> </span>
                    <p>R$ 49,97</p>

                    <div className="quantity">
                        <a><AiOutlineMinus /></a>
                        <span>01</span>
                        <a><AiOutlinePlus /></a>
                    </div>

                    <button>Incluir</button>
                </div>

                <div className="card">
                    <Icon className="favIcon" src={Heart} />
                    <img className="food" src={MaskGroup1} alt="" />
                    <span className='dish'>Salada Ravanello <MdKeyboardArrowRight/> </span>
                    <p>R$ 49,97</p>

                    <div className="quantity">
                        <a><AiOutlineMinus /></a>
                        <span>01</span>
                        <a><AiOutlinePlus /></a>
                    </div>

                    <button>Incluir</button>
                </div>

                <div className="card">
                    <Icon className="favIcon" src={Heart} />
                    <img className="food" src={MaskGroup1} alt="" />
                    <span className='dish'>Salada Ravanello <MdKeyboardArrowRight/> </span>
                    <p>R$ 49,97</p>

                    <div className="quantity">
                        <a><AiOutlineMinus /></a>
                        <span>01</span>
                        <a><AiOutlinePlus /></a>
                    </div>

                    <button>Incluir</button>
                </div>
            </div>
        </Container>
    )
}
