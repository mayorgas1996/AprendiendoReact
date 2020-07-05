import React, { Component } from 'react'

import Pelicula from './Pelicula'

class Peliculas extends Component {

  state = {
    
  };

  cambiarTitulo = () => {

    var {peliculas} = this.state;

    peliculas[0].titulo = 'Batman Begins';

    this.setState({
      peliculas: peliculas
    })
  }

  favorita = (pelicula) => {

    this.setState({
      favorita: pelicula
    })

  }

  componentWillMount() {
    //alert("Se va a montar el componente");
    this.setState({
      peliculas: [
        { titulo: 'Batman vs Superman', image: "https://www.comicverso.com/wp-content/uploads/2019/12/destacada-batmanvssuperman.jpg"},
        { titulo: 'Gran torino', image: "https://www.artmajeur.com/medias/standard/f/a/fasquelolivier/artwork/11789156_gran-torino.jpg"},
        { titulo: 'Forrest Gun', image: "https://pics.filmaffinity.com/Forrest_Gump-212765827-large.jpg"}
      ],
      nombre: 'Javier Mayorgas',
      favorita: {}
    });
  }

  componentDidMount() {
    //alert("Se ha montado el componente");
  }

  render() {

    var pStyle = {
      background: 'green',
      color: 'white',
      padding: '10px'
    };

    return (
      <div id="content" className="peliculas">

        <h2>Peliculas</h2>
        <p>Selección de las películas del usuario {this.state.nombre}</p>
        <div>
          <button onClick={this.cambiarTitulo}>Cambiar titulo Batman</button>
        </div>
        { //If en ReactJS
          this.state.favorita.titulo ?
          (
            <p className="favorita" style={pStyle}>
              <strong>La pelicula favorita es: </strong> <span>{this.state.favorita.titulo}</span>
            </p>
          ) : 
          (
            <p>No hay pelicula favorita</p>
          )
        }

        {/*Crear componente de películas*/}

        <div id="articles">

        {
          this.state.peliculas.map((pelicula, i) => {
            return(
              <Pelicula 
                key={i}
                pelicula={pelicula}
                marcarFavorita = {this.favorita}
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