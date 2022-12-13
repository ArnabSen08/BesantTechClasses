import React from 'react';
import { renderMatches } from 'react-router-dom';
import Country from './Country';


const Search = (props) =>{

    return (
        <div>
        <h2>{props.c}</h2>
        <h4>Successfully passed data to Search Component from Country Component</h4>
        <input type="text"  />
        </div>
    );
}

export default Search;


