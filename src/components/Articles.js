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
        return(
            <div id="articles">
                <h1>Hola Mundo</h1>
            </div>
        );
    }
}

export default Articles;