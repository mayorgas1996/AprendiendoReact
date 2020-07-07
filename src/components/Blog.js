import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';

class Home extends Component {
    render(){
        return(
            <div id="home">
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">

                    <div id="content">
                        <h1 className="subheader">Últimos articulos</h1>
                    </div>

                    <Sidebar 
                        blog = "true"
                    />

                </div>

            </div>
        );
    }
}

export default Home;