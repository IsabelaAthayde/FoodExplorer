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
    const [ cobsAll, setCobsAll ] = useState([]);
    const [ cobsLess, setCobsLess ] = useState([]);
    const [ typeShowCob, setTypeShowCob ] = useState('all');

    const navigate = useNavigate();

    useEffect(() => {
        function getScreenWidth() {
            setWidth(window.innerWidth)
        }
        getScreenWidth()
    }, [width, window.innerWidth])

    useEffect(() => {
        async function fetchCobs() {
            const cob = localStorage.getItem('@foodexplorer:cobs')
            let newCobs;
            
            if(typeShowCob == "less" ) {
                let storage = JSON.parse(cob);
                let txidArr = storage.map(item => item[0])
                const txids = await txidArr.map(txid => api.get(`/pay/cob/?txid=${txid}&type=less`))
                const infos = await Promise.all(txids);
                await storage.forEach((item) => {
                    const info = infos.find(cob => cob.data.txid == item[0]);
                    if (info) {
                        info.desc = item[1].description
                        insertToCobs(info)
                    }
                })
            }

            if(typeShowCob == "all") {
                newCobs = await api.get(`/pay/cob?type=all`)
                insertToCobs(newCobs.data)
            }
        }
        fetchCobs()
    }, [typeShowCob])

    function insertToCobs(info)  {
        if(typeShowCob === "less") {
            let cobFound = cobsLess.find((cob) => (cob.data.txid ===  info.data.txid));
            if(cobFound || !info) {
                return;
            }
            setCobsLess((prev) => [...cobsLess, info])
            
            console.log(cobsLess, info,'less')
        }

        if(typeShowCob === "all") {
            let infos = info.cobs;
            infos.forEach((info) => {
                let cobFound = cobsAll.find(cob => cob.txid ===  info.txid);
                if(cobFound) {
                    return;
                }
            })
            infos.length = 5;
            setCobsAll(infos)
            console.log(cobsAll, 'all')

        }
    }
return (
    <Container>
    <Header isAdmin={isAdmin} />
    <main>
        <section id='buttons'>

            <Button 
            id="back" 
            icon={<MdKeyboardArrowLeft />} 
            text="Voltar" 
            onClick={() => navigate(-1)}
            />

            <Button 
            id="type" 
            text={typeShowCob === "all" ? "Mostrar menos" : "Mostrar Todos"}
            onClick={() => typeShowCob === "all" ? setTypeShowCob('less') : setTypeShowCob('all')}
            />
        </section>

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
                {typeShowCob == "all" && cobsAll &&
                    cobsAll.map((cob) => (
                        <tr key={20 * (Math.random() * 10)} className="tr">
                             <td className="default td status"><Icon className="dot" src={Circle}/>{cob?.status}</td>
                             <td className="default td">{cob?.loc?.id}</td>
                             <td className="td">{cob?.desc}</td>
                             <td className="default td">{cob?.calendario?.criacao}</td>
                         </tr>
                    ))
                }
                {typeShowCob == "less" && cobsLess &&
                    cobsLess.map((cob) => (
                        <tr key={20 * (Math.random() * 10)} className="tr">
                             <td className="default td status"><Icon className="dot" src={Circle}/>{cob.data?.status}</td>
                             <td className="default td code">{cob.data?.loc?.id}</td>
                             <td className="td">{cob?.data?.desc}</td>
                             <td className="default td">{cob.data?.calendario?.criacao}</td>
                         </tr>
                    ))
                }
            </tbody>
            </table>
            :
            <div className="table">
                {typeShowCob == "all" && cobsAll &&
                    cobsAll.map((cob) => (
                        <div className="item" key={20 * (Math.random() * 10)}>
                            <section className="header">
                                <span>{cob.loc?.id}</span>
                                <span className='status'><Icon className="dot" src={Circle}/>{cob.status}</span>
                                <span>{cob.calendario?.criacao}</span>
                            </section>
                            <p className="description">{cob.desc}</p>
                        </div>
                    ))
                }
                {typeShowCob == "less" && cobsLess &&
                    cobsLess.map((cob) => (
                        <div className="item" key={20 * (Math.random() * 10)}>
                            <section className="header">
                                <span>{cob.data?.loc?.id}</span>
                                <span className='status'><Icon className="dot" src={Circle}/>{cob.data?.status}</span>
                                <span>{cob.data?.calendario?.criacao}</span>
                            </section>
                            <p className="description">{cob.desc}</p>
                        </div>
                    ))
                }
            </div>
            }
        </section>
    </main>
        <Footer/>
    </Container>
)
}
