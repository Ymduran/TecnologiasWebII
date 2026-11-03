import React from 'react';
import Encabezado from './components/Encabezado';
import Bienvenida from './components/Bienvenida';
import TarjetaPublicacion from './components/TarjetaPublicacion';
import PiePagina from './components/PiePagina';
import './App.css';

// Imágenes locales
import imagenLaptop from './assets/images/imgtecnologia.jpg';
import imagenLibros from './assets/images/educacion.jpeg';
import imagenPlanta from './assets/images/consultoria.jpeg';

function App() {
  //Variables para nombre de autor y año actual
  const nombreAutor = "Alejandro Montes Rivera";
  const anioActual = new Date().getFullYear();

  //Arreglo de publicaciones con imágenes locales
  const publicaciones = [
    
    {
      id: 1,
      titulo: "Software centrado en las personas",
      categoria: "Tecnología",
      destacada: true,
      imagen: imagenLaptop
    },
    {
      id: 2,
      titulo: "Inteligencia artificial en el aula",
      categoria: "Educación",
      destacada: false,
      imagen: imagenLibros
    },
    {
      id: 3,
      titulo: "Mejora continua en las organizaciones",
      categoria: "Consultoría",
      destacada: false,
      imagen: imagenPlanta
    }
      
  ];

  return (
    <div className="contenedor-principal">
      {/* Importación y paso de Props */}
      <Encabezado nombreAutor={nombreAutor} />
      
      <main>
        <Bienvenida />

        <section className="seccion-publicaciones">
          <h2>Publicaciones</h2>

          <div className="lista-tarjetas">
            {/*  Operador ternario si el arreglo está vacío */}
            {publicaciones.length === 0 ? (
              <p>No hay publicaciones</p>
            ) : (
              /* Recorrer lista con .map() e id único como key */
              publicaciones.map(function(publicacion) {
                return (
                  <TarjetaPublicacion
                    key={publicacion.id}
                    imagen={publicacion.imagen}
                    titulo={publicacion.titulo}
                    categoria={publicacion.categoria}
                    destacada={publicacion.destacada}
                  />
                );
              })
            )}
          </div>
        </section>
      </main>

      <PiePagina nombreAutor={nombreAutor} anioActual={anioActual} />
    </div>
  );
}

export default App;