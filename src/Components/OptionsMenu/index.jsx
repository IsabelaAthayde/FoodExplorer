import { Container } from "./styles";

import { LabeledInput } from "../LabeledInput";
import { useEffect, useState } from "react";

import { TagItem } from "../../Components/TagItem";
import { FaPlus } from "react-icons/fa";
import { FaFlagUsa } from "react-icons/fa";

export function OptionsMenu({isAdmin, h2, data, text, className, flex, onClick, ...rest}){

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
                    <div className="type2">
                        <FaFlagUsa/>
                        <span>ssssssss</span>
                    </div>
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