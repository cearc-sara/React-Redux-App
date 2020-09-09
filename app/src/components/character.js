import React from 'react';


const Character = ({character}) => {
    

    return <div className='character-card'>
        <img src={character.image} alt='' />
        <div className='character-info'>
        <h2>{character.name}</h2>
        <p>{character.status}</p>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin.name}</p>
        </div>
        </div>
}

export default Character