import React from 'react';
import './No.css'; // Opcional: si deseas agregar estilos específicos

const UnavailableMessage = () => {
  return (
    <div className="no">
      <h1 className="no-h1">
        Este servicio se suspendio por
      </h1>
      <br/>
      <h1 className="red-br">
        FALTA DE PAGO A TIEMPO
      </h1>
      <p className="no-h1">Regularice para tener su pagina de vuelta.</p>
    </div>
  );
}

export default UnavailableMessage;