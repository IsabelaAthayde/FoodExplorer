import { Container } from './styles';

import { Icon } from '../Icon';
import Slide from '../Slide';

import Heart from "../../assets/icons/Heart.svg";
import Pencil from "../../assets/icons/Pencil.svg";
import MaskGroup1 from "../../assets/Food/MaskGroup1.png";

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';


export function Meals({title, isAdmin, children}) {
    return (
        <Container className="slider" isAdmin={isAdmin}>
            <strong>{title}</strong>
            {children}
        </Container>
    )
}
