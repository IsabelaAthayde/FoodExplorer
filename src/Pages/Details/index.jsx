import { Container } from "./styles";
import { Footer } from '../../Components/Footer';
import { Button } from '../../Components/Button';
import { Icon } from '../../Components/Icon';
import { HeaderMobile } from "../../Components/Header/Mobile";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import MaskGroup1 from "../../assets/Food/MaskGroup1.png";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Receipt from "../../assets/icons/Receipt.svg";



export function Details() {
    return (
        <Container>
            <HeaderMobile />

            <main>
                <Button id="back" icon={<MdKeyboardArrowLeft />} text="Voltar" />

                <img className="food" src={MaskGroup1} alt="" />
                <span className='dish-name'>Salada Ravanello</span>
                <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>

                <div id="tags-container">
                    <span>Alface</span>
                    <span>cebola</span>
                    <span>pão naan</span>
                    <span>pepino</span>
                    <span>rabanete</span>
                    <span>tomate</span>
                </div>

                <section>
                    <div className="quantity">
                        <a><AiOutlineMinus /></a>
                        <span>01</span>
                        <a><AiOutlinePlus /></a>
                    </div>

                    <Button text="Pedir . R$ 25,00" icon={<img src={Receipt}/>} />
                </section>
            </main>

            <Footer/>
        </Container>
    )
}