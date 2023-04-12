import './style.css';
import bannerEmpresa from '../../assets/banner.png'

export default function Banner(props){
    return(
        <section className='banner-container'>
            <figure className={props.ehModoEscuro ? "banner-modo-escuro" : "banner-modo-claro"}>
            <img src={bannerEmpresa} />
            </figure>

            <section className='texto-banner'>
            <div className='titulo'>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h1>Agência de Branding </h1>
                <h2>e design digital</h2>
            </div>
            </section>
        </section>
    )
}