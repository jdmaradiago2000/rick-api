import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const CharacterInfo = ({characterUrl}) => {

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios.get(characterUrl).then((res) => setCharacter(res.data));
    }, [characterUrl])

    console.log(character)

    return (
            <div className='card'>
                <h4>Nombre: {character.name}</h4>
                <div className='info-card'>
                    <img src={character.image} alt="" />
                    <p><b>Estado: </b>{character.status}</p>
                    <p><b>Origen: </b>{character.origin?.name}</p>
                    <p><b>Episodios: </b>{character.episode?.length}</p>
                </div>
            </div>
    );
};

export default CharacterInfo;