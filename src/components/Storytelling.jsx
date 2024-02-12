import React from 'react'
import './Storytelling.css';
import Vicente from '../assets/quezada2.jpeg';
import Buttonc from './Buttonc'

const Storytelling = () => {
  return (
    <div className="story">
      <h1 className="title-story">QUIERO AYUDARTE A QUE CUMPLAS TUS METAS…</h1>
        <img className="img-story" src={Vicente} />
        <span>
            <p className="story-text">
            ¡Hola! Soy Vicente Tomas Quezada Aravena. 
            <br/>
            Soy padre de familia, estudiante de Turismo Ambiental y embajador viajero.
            <br/>
            Y hoy estoy aqui porque quiero darte un mensaje.
            <br/>
            <br/>
            <b>Cada vez son más las personas que se unen a esta oportunidad.</b>
            <br/>
            Ingresé a este proyecto con el objetivo de no solo cumplir mis metas financieras, sino también de satisfacer mi deseo de conocer diferentes partes del mundo.
            <br/>
            <br/>
            El impacto positivo que este club tiene en muchas familias alrededor del mundo es notable, <br/>
            ya que nos brinda la posibilidad de viajar de manera más económica, <br/>
            con descuentos que van desde el 25% hasta incluso la posibilidad de viajar de forma gratuita.
            <br/>
            <br/>
            Además con el tiempo, descubrí que <b>más del 90% de las personas hoy carecen de un plan para cumplir sus sueños</b>, un error garrafal que puede costar muy caro.
            <br/>
            La mayoría de las personas hoy...<br/><br/>
            - No tienen el vehículo adecuado.<br/>
            - No tienen un plan para hacerlo.<br/>
            - Tienen sueños pero nunca logran materializarlos.<br/>
            <br/>
            Es por eso que...
            <br/>
            <br/>
            Así es como me uní a cientos de viajeros, y cumplí mis sueños, ahora quiero ayudarte a ti.
            <br/>
            ¿Estás listo para cambiar tu vida y ser parte de esta increíble comunidad?<br/> 
            Únete a nosotros y descubre cómo juntos podemos alcanzar el éxito financiero y hacer realidad tus sueños.
            <br/>
            ¡Esta es tu señal para comenzar!
            </p>
        </span>
        <Buttonc />
    </div>
  )
}

export default Storytelling;