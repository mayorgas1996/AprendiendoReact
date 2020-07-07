import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
    render(){
        return(
            <div id="formulario">
                <Slider
                    title="Formulario"
                    size="slider-small"
                />
                <div className="center">

                    <div id="content">
                    </div>

                    <Sidebar 
                        blog = "false"
                    />

                </div>

            </div>
        );
    }
}

export default Home;