import React from 'react';


const Character = ({ character }) => {


    return <div className='character-card'>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        
        <div className='character-info'>
        <p>Status: {character.status}</p>&nbsp;
            <p>Species: {character.species}</p>&nbsp;
            <p>Gender: {character.gender}</p>&nbsp;
            <p>Origin: {character.origin.name}</p>&nbsp;
        </div>
    </div>
}

export default Character