import './style.css';
import {useState} from 'react';
import iconeLua from '../../assets/moon.png';
import iconeSol from '../../assets/sun.png'
import empresaLogo from '../../assets/logo.png';


export default function Topo (props){

    return(
        <header className= {props.ehModoEscuro ? "header-modo-escuro" : "header-modo-claro"}>
            <img src={empresaLogo}  />

            <button className={props.ehModoEscuro ? "btn-modo-escuro" : "btn-modo-claro"} onClick={props.funcaoBotao}><img src={props.ehModoEscuro ? iconeSol : iconeLua} /></button>
        </header>
    )
}