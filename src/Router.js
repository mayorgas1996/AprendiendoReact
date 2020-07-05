import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Importar componentes
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';
import Peliculas from './components/Peliculas';
import MiComponente from './components/MiComponente';
import Error from './components/Error';

class Router extends Component {


    render() {

        var buttonString = "Ir al blog";

        return (
            <BrowserRouter>

                <Header />

                <Slider
                    title="Bienvenido a la web de AprendiendoDjango con Javier Mayorgas"
                    btn={buttonString}
                />

                <div className="center">


                    {/* Configurar rutas y páginas */}
                    <Switch>
                        <Route exact path="/" component={Peliculas} />
                        <Route exact path="/ruta-prueba" component={SeccionPruebas} />
                        <Route exact path="/segunda_ruta" component={MiComponente} />
                        <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {

                            var nombre = props.match.params.nombre;
                            var apellidos = props.match.params.apellidos;

                            return (
                                <div id="content">
                                    <h1 className="subheader">Página de pruebas</h1>
                                    <h2>
                                        {nombre && !apellidos &&
                                            <span>{nombre}</span>
                                        }
                                        {nombre && apellidos &&
                                            <span>{nombre} {apellidos}</span>
                                        }
                                    </h2>
                                </div>
                            );
                        }} />

                        <Route component={Error} />

                    </Switch>
                    <Sidebar />
                    <div className="clearfix"></div>

                </div>

                <Footer />

            </BrowserRouter>
        );
    }

}

export default Router;