import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import imageDefault from '../assets/images/default.png';
import Moment from 'react-moment';
import 'moment/locale/es';

class Article extends Component {

    url = Global.url;

    state = {
        article: false,
        status: null
    };

    componentWillMount(){
        this.getArticle();
    }

    getArticle = () => {
        var id = this.props.match.params.id;
        
        axios.get(this.url + "article/" + id)
            .then(res => {
                this.setState({
                    article: res.data.article,
                    status: "success"
                })
            }).catch(err => {
                this.setState({
                    article: false,
                    status: 'success'
                });
            });

    }

    render(){
        var article = this.state.article;

        return (
            <div className="center">
                <section id="content">
                    {article && 

                        <article className="article-item article-detail">
                        <div className="image-wrap">
                            {
                                article.image !== null ?
                                (<img src={this.url + 'get-image/' + article.image} alt="Imagen"></img>)
                                :
                                (<img src={imageDefault} alt="Imagen"></img>)

                            }
                        </div>

                        <h1 className="subheader">{article.title}</h1>
                        <span className="date">
                            <Moment locale="es" fromNow>{article.date}</Moment>
                        </span>
                        <p>{article.content}</p>
                        
                        <Link to="/blog" className="btn btn-danger">Eliminar</Link>
                        <Link to="/blog" className="btn btn-warning">Editar</Link>

                        <div className="clearfix"></div>
                        </article>
                    
                    }

                    {!this.state.article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El articulo no existe</h2>
                            <p>Intentalo de nuevo más tarde</p>
                        </div>
                    }
                    {!this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espere unos segundos</p>
                        </div>
                    }
                    
                </section>
                <Sidebar/>
            </div>
            
        );
    }
}

export default Article;