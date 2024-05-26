import React from 'react';
import './No.css'; // Opcional: si deseas agregar estilos específicos

const UnavailableMessage = () => {
  return (
    <div className="no">
      <h1>Este servicio ha sido suspendido debido a<br/>FALTA DE PAGO<br/></h1>
      <p>Por favor, regularice su situación para reanudar el servicio.</p>
      <p>Gracias.</p>
    </div>
  );
}

export default UnavailableMessage;