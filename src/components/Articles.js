import React, {Component} from 'react'
import axios from 'axios';


class Articles extends Component {

    state = {
        articles: {},
        status: null
    }

    componentWillMount(){
        this.getArticles();
    }

    getArticles = ()  => {
        axios.get("http://localhost:3900/api/articles")
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
                            <img src="https://i.pinimg.com/originals/2a/00/0d/2a000d5c32ea3ef6c3fd4e4dbcb8a5b1.jpg" alt="Imagen"></img>
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