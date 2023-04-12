import './style.css'

export default function Card (props){
    return (
        <article className={props.ehModoEscuro ? "card-modo-escuro" : "card-modo-claro"}>
            <p>{props.data}</p>
            <h3>{props.profissao}</h3>
            <p>{props.empresa}</p>
            <p>{props.descricao}</p>
        </article>
    )
}