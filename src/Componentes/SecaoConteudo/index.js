import './style.css';
import Card from '../Card';

export default function Conteudo(props){
    return(
        <section className= {props.ehModoEscuro ? "conteudo-modo-escuro" : "conteudo-modo-claro"}>
            
            <div className={props.ehModoEscuro ? "xp-trabalho-modo-escuro" : "xp-trabalho-modo-claro"}>
            <h1 className='xp-trabalho-titulo'>Experiências De Trabalho</h1>
            <div className='linha'></div>

            <p>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de sites e Marketing Digital, nos empenhamos diariamente para entregar resultados que tragam impacto aos nossos clientes.</p>
            </div>

            <div className='cards'>
                <Card ehModoEscuro={props.ehModoEscuro} data='JUNHO 2012 - 2016' profissao='Web Designer' empresa='Pied Piper StartUp.' descricao='Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores' />
                <Card ehModoEscuro={props.ehModoEscuro} data='AGOSTO 2016 - 2019' profissao='Product Designer' empresa='E Corp.' descricao='Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra' />
                <Card ehModoEscuro={props.ehModoEscuro} data='FEVEREIRO 2019 - 2021' profissao='Digital Consulting' empresa='Arasaka Inc.' descricao='Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução'/>

                
            </div>
        </section>
    )
}