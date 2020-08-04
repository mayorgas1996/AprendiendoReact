import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';
import SimpleReactValidator from 'simple-react-validator'; //Validación de formularios
import swal from 'sweetalert';
import imageDefault from '../assets/images/default.png';

// 1. Tenemos que recoger el id del artículo a editar de la url
// 2. Crear método para sacar el objeto de la BBDD mediante el Backend
// 3. Rellenar el formulario con los datos obtenidos
// 4. Actualizar el objeto realizando petición al Backend.

class EditArticle extends Component{

    url = Global.url;
    titleRef = React.createRef();
    contentRef = React.createRef();

    articleId = null;

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    componentWillMount(){
        this.articleId = this.props.match.params.id; //Cogemos el id de la url
        this.getArticle(this.articleId);
        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido.' //Personalización de los mensajes de validación
            }
        });
    }

    getArticle = (id) => {
        axios.get(this.url + 'article/' + this.articleId)
        .then( res => {
           this.setState({
               article: res.data.article
           }) 
        });
    }


    saveArticle = (e) => {
        e.preventDefault();

        //Rellenar state con valores del formulario
        this.changeState();

        if(this.validator.allValid()){

        //Hacer una petición HTTP por POST para guardar el artículo
        axios.put(this.url + 'article/' + this.articleId, this.state.article)
            .then( res => {
                console.log('Res.data.article es: ' + res.data.article);
                if(res.data.article){

                    this.setState({
                        article: res.data.article,
                        status: 'waiting'
                    });

                    swal(
                        'Articulo creado',
                        'El articulo se ha creado correctamente',
                        'success'
                    )

                    //Subir la imagen
                    if(this.state.selectedFile !== null){
                        
                        //Sacar el id del articulo guardado
                        var article_id = this.state.article._id;

                        // Crear form data y añadir fichero
                        const form_data = new FormData();

                        form_data.append(
                            'file0',
                            this.state.selectedFile,
                            this.state.selectedFile.name
                        );

                        // Petición AJAX
                        axios.post(this.url + 'upload-image/' + article_id, form_data)
                            .then(res => {
                                if(res.data.article){
                                    this.setState({
                                        article: res.data.article,
                                        status: 'success'
                                    });
                                }
                                else{
                                    this.setState({
                                        article: res.data.article,
                                        status: 'failed'
                                    });
                                }
                            });

                    }
                    else{
                        this.setState({
                            status: 'success'
                        });
                    }
                }
                else{
                    this.setState({
                        status: 'failed'
                    });
                }
            });
        
        }
        else{
            
            this.setState({
                status: 'failed'
            });

            this.validator.showMessages();
            this.forceUpdate();
        }

    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        });

        //Para que la validación sea en tiempo real
        this.validator.showMessages();
        this.forceUpdate();
    }

    fileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });

        console.log(this.state);
    }

    render(){

        if(this.state.status === 'success'){
            return <Redirect to="/blog" />
        }

        var article = this.state.article;

        return(
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Actualizar articulo</h1>
                

                    { 
                    //Si está el artículo que se carguen sus datos en el formulario
                    this.state.article.title &&

                        <form className="mid-form" onSubmit={this.saveArticle}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState}/>

                            {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                        
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" defaultValue={article.content} ref={this.contentRef} onChange={this.changeState}/>
                            {this.validator.message('content', this.state.article.content, 'required')}
                        </div>
                        <div className="form-group">
                            <label htmlFor="file0">Imagen</label>
                            <input type="file" name="file0" onChange={this.fileChange}/>
                            <div className="image-wrap">
                                {
                                    article.image !== null ?
                                        (<img src={this.url + 'get-image/' + article.image} alt="Imagen" className="thumb"></img>)
                                        :
                                        (<img src={imageDefault} alt="Imagen" className="thumb"></img>)

                                }
                            </div>

                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Guardar" className="btn btn-success"/>
                    </form>
                    
                    }
                    {
                        !this.state.article.title && 
                        <h1 className="subheader">Cargando...</h1>
                    }

                
                </section>

                <Sidebar/>

            </div>

        );
    }
}

export default EditArticle;