import { Container } from './styles';
import { Logo } from '../../Logo';

import { BsSearch } from 'react-icons/bs';
import Menu from "../../../assets/icons/Menu.svg";
import Receipt from "../../../assets/icons/Receipt.svg";

export function HeaderMobile({ isAdmin, ...rest}) {
    return (
        <Container {...rest} isAdmin={isAdmin}>
            <button>
                <img src={Menu} alt="" />
            </button>
            <Logo />
            {
                isAdmin ? <span>admin</span> : (
                    <button>
                        <img src={Receipt} alt="" />
                        <div id="order">0</div>
                    </button>
                )
            }
        </Container>
    )
}