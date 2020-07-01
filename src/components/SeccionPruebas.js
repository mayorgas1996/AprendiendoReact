import React, { Component } from 'react';

import MiComponente from './MiComponente';
import Peliculas from './Peliculas';

class SeccionPruebas extends Component {

    //Creación del estado
    state = {
        contador: 0
    };

    //Actualización del estado - Suma
    sumar = (e) => {
        this.setState({
            contador: (this.state.contador + 1)
        });
    }

    //Actualización del estado - Resta
    restar = (e) => {
        this.setState({
            contador: (this.state.contador - 1)
        });    
    }

    render() {
        return (
            <section id="content">
                <h2 className="subheader">Últimos articulos</h2>

                <p>
                    Hola a todos, bienvenidos a la web en ReactJS.
                </p>
                <h2 className="subheader">Parrafo</h2>
                <p>
                    Ejemplo de párrafo.
                </p>

                <h2 className="subheader">Componentes</h2>

                <section className="componentes">
                    <MiComponente />
                    <Peliculas />
                </section>

                <h2 className="subheader">Estado</h2>

                <p>
                    Contador: {this.state.contador}
                </p>
                <p>
                    <input type="button" value="Sumar" onClick={this.sumar}/>
                    <input type="button" value="Restar" onClick={this.restar}/>
                </p>

            </section>
        );
    }
}

export default SeccionPruebas;