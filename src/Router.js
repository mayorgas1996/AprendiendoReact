import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

//Importar componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Peliculas from './components/Peliculas';
import MiComponente from './components/MiComponente';
import Error from './components/Error';
import Home from './components/Home';
import Blog from './components/Blog';
import Formulario from './components/Formulario';
import Search from './components/Search';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class Router extends Component {


    render() {

        return (
            <BrowserRouter>

                <Header />

                    {/* Configurar rutas y páginas */}
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/blog/busqueda/:search" component={Search} />
                        <Route exact path="/redirect/:search" render={
                            (props) => {
                                var search = props.match.params.search;
                                
                                return (
                                    <Redirect to={'/blog/busqueda/' + search}/>
                                );
                            }
                        }/>
                        <Route exact path="/blog/articulo/:id" component={Article}/>
                        <Route exact path="/formulario" component={Formulario} />
                        <Route exact path="/peliculas" component={Peliculas} />
                        <Route exact path="/segunda_ruta" component={MiComponente} />
                        <Route exact path="/blog/crear" component={CreateArticle} />
                        <Route exact path="/blog/editar/:id" component={EditArticle} />
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
                    
                    <div className="clearfix"></div>


                <Footer />

            </BrowserRouter>
        );
    }

}

export default Router;