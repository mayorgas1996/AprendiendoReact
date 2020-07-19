import React, {Component} from 'react'
import axios from 'axios';
import Gobal from '../Global';
import Global from '../Global';
import imageDefault from '../assets/images/default.png';

class Articles extends Component {

    url = Global.url;

    state = {
        articles: {},
        status: null
    }

    componentWillMount(){
        this.getArticles();
    }

    getArticles = ()  => {
        axios.get(this.url + 'articles')
        .then(res => {
            this.setState({
                articles: res.data.articles,
                status: "success"
            });
        });
    }

    render(){
        if(this.state.articles.length >= 1){

            var listArticles = this.state.articles.map((article) =>{
                return (
                    <article id={article.id} className="article-item" id="article-template">
                        <div className="image-wrap">
                            {article.image !== null ?
                                (<img src={this.url + 'get-image/' + article.image} alt="Imagen"></img>)
                                :
                                (<img src={imageDefault} alt="Imagen"></img>)

                            }
                            <img src={this.url + 'get-image/' + article.image} alt="Imagen"></img>
                        </div>
                        <h2>{article.title}</h2>
                        <span className="date">
                            {article.date}
                        </span>
                        <a href="#">Leer más</a>

                        <div className="clearfix"></div>
                    </article>
                );
            })
            return(
                <div id="articles">
                    {listArticles}
                </div>
            );
        }
        else if(this.state.articles.length === 0 && this.state.status === "success"){
            return(
                <div id="articles">
                    <h2 className="subheader">No hay articulos para mostrar</h2>
                    <p>Todavía no hay contenido en esta sección</p>
                </div>
            );
        }
        else{
            return(
                <div id="articles">
                    <h2 className="subheader">Cargando ...</h2>
                    <p>Espere mientras carga el contenido</p>
                </div>
            );
        }
    }
}

export default Articles;