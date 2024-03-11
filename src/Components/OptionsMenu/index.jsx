import { Container } from "./styles";


import { useEffect, useState } from "react";

import { TagItem } from "../../Components/TagItem";
import { Icon } from "../../Components/Icon";
import { FaPlus } from "react-icons/fa";

import mastercard from "../../assets/icons/brands/mastercard.svg"

export function OptionsMenu({isAdmin, h2, data, text, className, flex, onClick, ...rest}){

    const [cardData, setCardData] = useState([]);


    useEffect(()=> {
    data = {
       'Isabela' : { brand: 'mastercard',
        cardNumber: ' **** **** **** *775'
        },
        'Fabio' : { brand: 'mastercard',
                    cardNumber: ' **** **** **** *124'            
        }
    }

    setCardData(cardData);
    }, [])

    return (
        <Container>
            <section>
                <h2>{h2}</h2>
                    {/* data entra aqui */}
                    {flex ? 
                    <div className="type1">
                        <h4>Isabela Oliveira</h4>
                        <span className={className}>rua leocadio figueiredo...</span>
                    </div> : 
                    cardData &&
                    cardData.map((card) => (
                        console.log(card)
                    // <div className="type2">
                    //     {card.brand === 'mastercard' ? <Icon src={mastercard} /> : null}
                    //     <span>{card.cardNumber}</span>
                    // </div>
                    ))
                    }
                {/*Pela quantidade de cartões adicionados */}
                <div id="add" onClick={onClick}>
                    <button {...rest}>{text}</button>
                    <FaPlus/>
                </div>
                
            </section>
        </Container>
    )
}