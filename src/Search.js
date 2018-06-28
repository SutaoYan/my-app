"use strict";

import React, {Component} from 'react';
import './Search.css';
class Search extends Component {
    constructor(props) {
        super(props);
        this.onEnter = (event) => {
            if (event.keyCode === 13) {
                console.log('press enter key');
            }
        };
    }

    render () {
        return (
            <div className="search-div">
                <label id="search-label">key word: </label>
                <input id="search-input" onKeyUp={(e)=>this.onEnter(e)}>
                </input>
            </div>
        );
    }
}

export default Search;
