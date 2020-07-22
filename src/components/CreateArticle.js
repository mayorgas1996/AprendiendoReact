import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';

//Validación formularios y alertas

class CreateArticle extends Component{

    url = Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article: {},
        status: null
    };

    saveArticle = (e) => {
        e.preventDefault();

        //Rellenar state con valores del formulario
        this.changeState();

        //Hacer una petición HTTP por POST para guardar el artículo
        axios.post(this.url + 'save', this.state.article)
            .then( res => {
                if(res.data.article){
                    this.setState({
                        article: res.data.article,
                        status: 'success'
                    });
                }
                else{
                    this.setState({
                        status: 'failed'
                    });
                }
            });
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });
    }

    render(){

        if(this.state.status === 'success'){
            return <Redirect to="/blog" />
        }

        return(
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Crear articulo</h1>
                
                    <form className="mid-form" onSubmit={this.saveArticle}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" ref={this.titleRef} onChange={this.changeState}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" ref={this.contentRef} onChange={this.changeState}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0"/>
                        </div>

                        <input type="submit" value="Guardar" className="btn btn-success"/>
                    </form>
                
                </section>

                <Sidebar/>

            </div>

        );
    }
}

export default CreateArticle;