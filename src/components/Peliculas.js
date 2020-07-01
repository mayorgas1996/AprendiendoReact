import React, { Component } from 'react'

import Pelicula from './Pelicula'

class Peliculas extends Component {

  state = {
    peliculas: [
      { titulo: 'Batman vs Superman', image: "https://www.comicverso.com/wp-content/uploads/2019/12/destacada-batmanvssuperman.jpg"},
      { titulo: 'Gran torino', image: "https://www.artmajeur.com/medias/standard/f/a/fasquelolivier/artwork/11789156_gran-torino.jpg"},
      { titulo: 'Forrest Gun', image: "https://pics.filmaffinity.com/Forrest_Gump-212765827-large.jpg"}
    ],
    nombre: 'Javier Mayorgas'
  };

  render() {
    return (
      <div id="content" className="peliculas">

        <h2>Peliculas</h2>
        <p>Selección de las películas del usuario {this.state.nombre}</p>

        {/*Crear componente de películas*/}

        <div id="articles">

        {
          this.state.peliculas.map((pelicula, i) => {
            return(
              <Pelicula 
                key={i}
                pelicula={pelicula}
              />
            );
          })
        }

        </div>

      </div>
    );
  }
}


export default Peliculas;