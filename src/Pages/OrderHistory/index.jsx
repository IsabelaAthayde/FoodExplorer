import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import { api } from "../../services/api.js";
 
import { Container } from "./styles";
import { Footer } from '../../Components/Footer';
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Icon } from "../../Components/Icon";
import Circle from "../../assets/Circle.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export function OrderHistory({isAdmin}) {
    const [ width, setWidth ] = useState(undefined);
    const [ cobs, setCobs ] = useState([]);

    useEffect(() => {
        function getScreenWidth() {
            setWidth(window.innerWidth)
        }
        getScreenWidth()
    }, [width, window.innerWidth])

    useEffect(() => {
        async function fetchCobs() {
            const cob = localStorage.getItem('@foodexplorer:cobs')

            if(cob) {
                const response = await api.get('/pay/cobrancas', {cob: JSON.parse(cob)})
                setCobs([{...response.data.cobs}, {...response.config.cob}])
                console.log(cobs)
            }
        }
        fetchCobs()
    }, [])

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
                {cobs &&
                    cobs.map((cob) => (
                        <tr key={cob[0].txid + Math.random()} className="tr">
                            <td className="default td status"><Icon className="dot" src={Circle}/>{cob[0].status}</td>
                            <td className="default td">{cob[0].loc?.id}</td>
                            <td className="td">1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de Maracujá</td>
                            <td className="default td">{cob[0].calendario?.criacao}</td>
                        </tr>
                    ))
                }
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