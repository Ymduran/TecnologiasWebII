import React from 'react';

function PiePagina(props) {
  return (
    <footer className="pie-pagina">
      <p>{props.nombreAutor} - {props.anioActual}</p>
    </footer>
  );
}

export default PiePagina;