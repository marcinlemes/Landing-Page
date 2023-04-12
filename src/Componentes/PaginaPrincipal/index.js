import React, {useState} from "react";
import Topo from '../Topo';
import Banner from "../SecaoBanner";
import Conteudo from '../SecaoConteudo';
import Rodape from "../Rodape";

export default function PaginaPrincipal(){

    const [ehModoEscuro, setEhModoEscuro] = useState(false);

    const alterarModo = () =>{
       setEhModoEscuro(!ehModoEscuro)
    }


    return(
        <body>
            <Topo funcaoBotao={alterarModo} ehModoEscuro={ehModoEscuro}/>
            <Banner ehModoEscuro={ehModoEscuro}/>
            <Conteudo ehModoEscuro={ehModoEscuro}/>
            <Rodape ehModoEscuro={ehModoEscuro}/>
        </body>
    )
}