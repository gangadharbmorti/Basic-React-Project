import React, { useState } from 'react';
import './search.css';
import Searchapi from './searchapi';

const Search = () => {
    const [img ,setImg]= useState("");
    const inputData= (event) => {
        const data= event.target.value;
         setImg(data);
    };
    return (
        <div className="search-bar">
          <label>Search Here</label>  
        <input type="text" 
        placeholder="Search"
        value={img}
        onChange={inputData}
        />
        { img==="" ? null : <Searchapi name={img}/>}
        </div>
    )
}

export default Search
