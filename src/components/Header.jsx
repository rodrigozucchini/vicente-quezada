import React, { useState, useEffect } from 'react';
import './Header.css';
import crucero1 from '../assets/crucero1.jpg';
import crucero2 from '../assets/crucero2.jpg';
import crucero3 from '../assets/crucero3.jpg';
import crucero4 from '../assets/crucero4.jpg';
import Buttonc from '../ButtonC';

const Header = () => {
  const images = [
    `url(${crucero1})`,
    `url(${crucero2})`,
    `url(${crucero3})`,
    `url(${crucero4})`,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia el valor a 3000 para cambiar de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="background-carousel"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(1,17,38,0) 0%, rgba(1,17,38,1) 100%), ${images[index]}`,
      }}
    >
      <div className="header-title">
        <p className='title-img'>TU AVENTURA COMIENZA AQUI <br/><br/>Descubre Cómo Viajar <br/>y Generar Ingresos</p>
        <Buttonc />
      </div>
    </div>
  );
};

export default Header;