import React from 'react';

function Encabezado(props) {
  return (
    <header className="encabezado">
      <h1>{props.nombreAutor}</h1>
      <nav>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Encabezado;