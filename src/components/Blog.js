import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Blog extends Component {

    render(){

        return(
            <div id="home">
                <Slider
                    title="Blog"
                    size="slider-small"
                />
                <div className="center">

                    <div id="content">
                        <Articles/>
                    </div>
                    
                    <Sidebar 
                        blog = "true"
                    />

                </div>

            </div>
        );
    }
}

export default Blog;