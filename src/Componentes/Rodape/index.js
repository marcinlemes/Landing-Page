import './style.css';
import logo from '../../assets/logo.png'
import fb from '../../assets/facebook.png';
import gplus from '../../assets/google-plus.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import dribble from '../../assets/dribble.png';
import behance from '../../assets/behance.png';

export default function Rodape (props){
    return(
        <footer className={props.ehModoEscuro ? "footer-modo-escuro" : "footer-modo-claro"}>
            <section className='conteudo-rodape-container'>
                <img src={logo} />
                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>
                <div className='logos'>
                    <img src= {fb} />
                    <img src= {twitter}/>
                    <img src= {linkedin} />
                    <img src= {dribble}/>
                    <img src= {behance}/>
                    <img src= {gplus} />
                </div>

            </section>
                <p className='dev'>Copyright 2023 © <span>Márcio Lemes</span></p>
        </footer>
    )
}