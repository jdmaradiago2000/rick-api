import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const SearchBox = ({setCharacterType}) => {

    const [search, setSearch] = useState("")

    const searchType = () => {
        // Hacemos la petición con el id que haya
        // colocado el usuario en el input
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
            .then((res) => setCharacterType(res.data))
    }
    
    return (
        <div className='search-box'>
            <input className='quest' type="text" placeholder='Type a location ID' 
            onChange={(e) => setSearch(e.target.value)} 
            value={search}/> {/* Esto es un Input controlado, requiere onChange con el  setSearch y value con el estado search*/}
            <button onClick={searchType} className="button">Search</button> 
        </div>
    );
};

export default SearchBox;