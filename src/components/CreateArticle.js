import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';
import Sidebar from './Sidebar';

//Validación formularios y alertas

class CreateArticle extends Component{
    render(){

        return(
            <div className="center">
                <section id="context">
                    <h1 className="subheader">Crear articulo</h1>
                </section>

                <Sidebar/>

            </div>

        );
    }
}

export default CreateArticle;