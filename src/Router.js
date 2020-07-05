import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Peliculas from './components/Peliculas';

class Router extends Component {


    render(){
        return(
            <BrowserRouter>

                {/* Configurar rutas y páginas */}
                <Switch>
                    <Route exact path="/" component={Peliculas}/>
                    <Route path="/ruta-prueba" component={SeccionPruebas}/>
                    <Route path="/segunda_ruta" component={MiComponente}/>
                </Switch>
            </BrowserRouter>
        );
    }

}