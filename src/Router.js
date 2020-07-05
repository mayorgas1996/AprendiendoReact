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
                
                    <Route component={Error}/>
                </Switch>
                
            </BrowserRouter>
        );
    }

}

export default Router;