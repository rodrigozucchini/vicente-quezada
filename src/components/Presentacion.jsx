import React from 'react';
import './Presentacion.css';
import ReactPlayer from 'react-player';
import Button2 from './Button2';


const Presentacion = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=8KrhhNZ6WWM';

  return (
    <div className="back-presentacion">
    <h1 className="title-presentacion">
        PRESENTACION DE NUESTRO<br/>
        CLUB DE VIAJES<br/>
    </h1>
    <div className="presentacion">
        <ReactPlayer
        width="1000px"
        height="500px"
        className='video-player-video'
        controls={true} // Deshabilita todos los controles predeterminados
        url={videoUrl}
        />
    </div>
    <Button2 />
    </div>
  );
};

export default Presentacion;