import React, { useState } from 'react';

const LocationInfo = ({characterType}) => {

    return (
        <div className='general-info'> 
            <h2 className='planeta'>{characterType.name}</h2>
            <div className='characters-info'>
                <p><b>Type: </b>{characterType.type}</p>
                <p><b>Dimension: </b>{characterType.dimension}</p>
                <p><b>Population: </b>{characterType.residents?.length}</p>
            </div>
        </div>
    );
};

export default LocationInfo;