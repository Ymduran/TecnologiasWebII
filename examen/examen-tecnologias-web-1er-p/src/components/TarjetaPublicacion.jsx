import React from 'react';

function TarjetaPublicacion(props) {
  return (
    <div className="tarjeta">
      {/* Renderizado condicional usando && */}
      {props.destacada && <span className="etiqueta-destacada">Destacada</span>}
      
      <img src={props.imagen} alt={props.titulo} />
      <span className="categoria">{props.categoria}</span>
      <h3>{props.titulo}</h3>
      <a href="#leer">Leer artículo &rarr;</a>
    </div>
  );
}

export default TarjetaPublicacion;