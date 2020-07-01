import React, { Component } from 'react';

class Pelicula extends Component {

    render() {

        const { titulo, image } = this.props.pelicula;

        return (
            <article class="article-item" id="article-template">
                <div class="image-wrap">
                    <img src={image} alt={titulo} />
                </div>
                <h2>{titulo}</h2>
                <span class="date">
                    Hace 5 minutos
                </span>
                <a href="#">Leer más</a>

                <div class="clearfix"></div>
            </article>
        );
    }

}

export default Pelicula;