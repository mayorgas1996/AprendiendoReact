import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
    render(){
        return(
            <div id="home">
                <Slider
                    title="Bienvenido a la web de AprendiendoDjango con Javier Mayorgas"
                    btn="Ir al blog"
                />
                <div className="center">

                    <div id="content">
                        <h1 className="subheader">Últimos articulos</h1>
                    </div>

                    <Sidebar />

                </div>

            </div>
        );
    }
}

export default Home;