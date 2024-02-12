import React from 'react';
import './Bonus.css';
import Bono1 from '../assets/bono.png';
import Bono2 from '../assets/bono2.png';
import Bono3 from '../assets/bono3.png';

const Bonus = () => {
  return (
    <div className='bonus-div'>
    <h1 className='title-bonus'>cruceros y resort son nuestra especialidad</h1>
    <p className='primer-bonus'>
    Realmente considero que la INFORMACION QUE VOY A BRINDARTE
    <br />
    <br />
    es sumamente importante 
    <br />
    <br />
    por eso quiero contarte 
    <br />
    <br />
    estos 3 beneficios
    </p>
    <div className="ebook">
        <h1 className="title-ebook">VIAJA POR MENOS</h1>   
        <img className="img-ebook" src={Bono1}  />
        <p className="ebook-text">Te voy a brindar las 3 claves para viajar por menos.
        <br />
        <br />
        - Clave 1: Con tu mensualidad de 100 viajaras por menos
        <br />
        <br />
        - Clave 2: Puedes llevar a toda tu familia de viaje
        <br />
        <br />
        - Clave 3: Viaja a los miles de destinos que ofrece este club
        <br />
        <br />
        Los Miembros del Club siempre ahorran en cruceros
        </p>
    </div>
    <div className="ebook">
        <h1 className="title-ebook">VIAJA GRATIS</h1>   
        <img className="img-ebook" src={Bono2}  />
        <p className="ebook-text">Te compartiré los beneficios de viajar gratis de este club.
        <br />
        ACCESO a más de 150,000 hoteles y resorts de lujo
        <br />
        <br />
        A medida que compartes la Membresía y ayudas a otros a hacer lo mismo<br />
        nuestra generosa compensación e incentivos se convierten en el medio para<br />
        cumplir tus sueños.
        <br />
        <br />
        Únete a las mas de miles de personas que viajan gratis con este club.
        </p>
    </div>
    <div className="ebook">
        <h1 className="title-ebook">GANA DINERO VIAJANDO</h1>   
        <img className="img-ebook" src={Bono3}  />
        <p className="ebook-text">Y si te dijiera que hay una manera de generar dinero y viajar gratis<br />
        <br />
        ¿Me creerías?
        <br />
        <br />
        Con este club tienes el beneficio de tener tu negocio digital desde tu celular para poder expandirlo a cualquier parte del mundo.
        <br />
        <br />
        Solo necesitas:
        <br />
        - Conexion a internet
        <br />
        - Ganas de emprender
        <br />
        - Recomendar este club
        <br />
        - Y ser un apasionado de los viajes
        </p>
    </div>
    </div>
  )
}


export default Bonus;