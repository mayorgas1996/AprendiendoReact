import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';
import Error from './components/Error';

class Router extends Component {


    render(){
        return(
            <BrowserRouter>

                {/* Configurar rutas y páginas */}
                <Switch>
                    <Route exact path="/" component={Peliculas}/>
                    <Route exact path="/ruta-prueba" component={SeccionPruebas}/>
                    <Route exact path="/segunda_ruta" component={MiComponente}/>                
                    <Route exact path="/pruebas/:nombre/:apellidos?" render = { (props) => {
                        
                        var nombre = props.match.params.nombre;
                        var apellidos = props.match.params.apellidos;

                        return(
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
                    }}/>

                    <Route component={Error}/>

                </Switch>

            </BrowserRouter>
        );
    }

}

export default Router;