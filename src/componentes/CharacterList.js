import React from 'react';
import CharacterInfo from './CharacterInfo';

const CharacterList = ({characters}) => {

    return (
        <div className='test-container'>
            {characters?.map((character) =>(
                <CharacterInfo
                    characterUrl={character}
                    key={character}
                />    
            ))}
        </div>
    );
};

export default CharacterList;