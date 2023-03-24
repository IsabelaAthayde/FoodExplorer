import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import { Container } from "./styles";
import { Footer } from '../../Components/Footer';
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Icon } from "../../Components/Icon";
import Circle from "../../assets/Circle.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export function OrderHistory({isAdmin}) {
    const [ width, setWidth ] = useState(undefined);

    useEffect(() => {
        function getScreenWidth() {
            setWidth(window.innerWidth)
        }
        getScreenWidth()
    }, [width, window.innerWidth])

return (
    <Container>
    <Header isAdmin={isAdmin} />
    <main>
        <Button 
        id="back" 
        icon={<MdKeyboardArrowLeft />} 
        text="Voltar" 
        onClick={() => navigate(-1)}
        />

        <h1>Histórico de Pedidos</h1>
        
        <section className="history">
            { window.innerWidth > 768 ? 
            <table>
            <thead>
            <tr className="tr">
                <th className="default th">Status</th>
                <th className="default th">Código</th>
                <th className="th">Detalhamento</th>
                <th className="default th">Data e Hora</th>
            </tr>
            </thead>
            <tbody>
            <tr className="tr">
                <td className="default td status"><Icon className="dot" src={Circle}/>Pendente</td>
                <td className="default td">000000</td>
                <td className="td">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                <td className="default td">55555</td>
            </tr>
            <tr className="tr">
                <td className="default td status"><Icon className="dot" src={Circle}/>Pendente</td>
                <td className="default td">000000</td>
                <td className="td">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                <td className="default td">55555</td>
            </tr>
            <tr className="tr">
                <td className="default td status"><Icon className="dot" src={Circle}/>Pendente</td>
                <td className="default td">000000</td>
                <td className="td">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                <td className="default td">55555</td>
            </tr>
            <tr className="tr">
                <td className="default td status"><Icon className="dot" src={Circle}/>Pendente</td>
                <td className="default td">000000</td>
                <td className="td">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                <td className="default td">55555</td>
            </tr>
            <tr className="tr">
                <td className="default td status"><Icon className="dot" src={Circle}/>Pendente</td>
                <td className="default td">000000</td>
                <td className="td">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                <td className="default td">55555</td>
            </tr>
            <tr className="tr">
                <td className="default td status"><Icon className="dot" src={Circle}/>Pendente</td>
                <td className="default td">000000</td>
                <td className="td">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                <td className="default td">55555</td>
            </tr>
            </tbody>
            </table>
            :
            <div className="item">
                <section className="header">
                    <span>00000</span>
                    <span className='status'><Icon className="dot" src={Circle}/>Pendente</span>
                    <span>20/05 às 18h00</span>
                </section>
                <p className="description">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</p>
            </div>
            }
        </section>
    </main>
        <Footer/>
    </Container>
)
}