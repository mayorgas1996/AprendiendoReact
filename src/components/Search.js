import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';

class Search extends Component {

    render(){
        var searched = this.props.match.params.search;

        return(
            <div id="home">
                <Slider
                    title={"Búsqueda: " + searched}
                    size="slider-small"
                />
                <div className="center">

                    <div id="content">
                        <Articles
                            search={searched}
                        />
                    </div>
                    
                    <Sidebar 
                        Search = "true"
                    />

                </div>

            </div>
        );
    }
}

export default Search;