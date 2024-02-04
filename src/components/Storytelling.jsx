import React from 'react'
import './Storytelling.css';
import Vicente from '../assets/quezada.jpeg';

const Storytelling = () => {
  return (
    <div className="story">
      <h1 className="title-story">ASÍ LOGRÉ CUMPLIR MIS METAS CUANDO ESTABA EN TU LUGAR…</h1>
        <img className="img-story" src={Vicente} />
        <span>
            <p className="story-text"><b>Cada vez son más las personas que se unen a esta oportunidad.</b>
                <br />
                <br />
                Mi nombre es Angelo Nisi, soy autor del libro “Conciencia Financiera” (con +1.500 descargas) y entiendo por lo que estás pasando, aplicas todo tal cual te lo enseñan los libros pero el resultado no llega, tienes cientos de metas anotadas y muchas ganas de conseguirlas pero pasan los días y... nada.  
                <br />
                <br />
                En el año 2019 comencé mi camino emprendiendo dentro de la industria del Network Marketing (en el rubro del turismo) y me estaba yendo bien hasta que llegó la pandemia y me di cuenta de algo que generó un shock en mí.
                <br />
                <br />
                Con los meses descubrí que <b>¡MÁS DEL 90%! de las personas a día de hoy NO TIENEN un plan para cumplir sus sueños, esto es un error garrafal,</b> y que cuesta muy caro.
                <br />
                <br />
                La mayoría de las personas hoy...
                <br />
                - No el vehiculo adecuado
                <br />
                - No tienen un plan para hacerlo
                <br />
                - Tienen sueños pero nunca logran materializarlos
                <br />
                <br />
                Yo estuve en tu situación...
                <br />
                <br />
                Allá por Junio del 2021 tomé una decisión, <b>me propuse ser la solución financiera de 1.000.000 de emprendedores digitales,</b> y día a día lo estamos haciendo realidad, y digo estamos porque sólo nadie llega a lo que considere "éxito".
                <br />
                <br />
                Así nació lo que hoy es el <b>Programa de Transformación Financiera,</b> más de 1 año de trabajo, estudio e investigación con el fin de crear <b>el programa más completo, práctico y eficiente que jamás hubiera existido.</b>
                <br />
            </p>
        </span>
    </div>
  )
}

export default Storytelling;