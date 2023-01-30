import { Container } from './styles';
import { Logo } from '../../Logo';

import { BsSearch } from 'react-icons/bs';
import Menu from "../../../assets/icons/Menu.svg";
import Receipt from "../../../assets/icons/Receipt.svg";

export function HeaderMobile({ iconInit, iconEnd, ...rest}) {
    return (
        <Container {...rest}>
            <img src={Menu} alt="" />
            <Logo />
            <button>
                <img src={Receipt} alt="" />
                <div id="order">0</div>
            </button>
        </Container>
    )
}