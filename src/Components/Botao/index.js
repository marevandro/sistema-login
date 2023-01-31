import React from "react";
import { BotaoCustomizado } from "./styles";


export function Botao({
    type,
    text,
    onClick,
    //disable,
}){
    return(
        <BotaoCustomizado
            type={type}
            text={text}
            onClick={onClick} 
        >
            {text}
        </BotaoCustomizado>
    )
}

export default Botao;