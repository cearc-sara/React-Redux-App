import React, {useState} from 'react';


const Character = ({ character }) => {
    const [show, setShow] = useState(false)

    return <div className='character-card'>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
        
        <div className='character-info'>
        <p className={character.status}>Status: {character.status}</p>&nbsp;
        <div onClick={() => setShow(!show)}>
            {!show ? (
                <div className='show'>Show Details</div>
            ) : (
                <>
                <div className='close'>Close Details</div>
              <div>
                <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Current Location: {character.location.name}</p>
            </div>
            </>
            )}
            
            </div>
        </div>
    </div>
}

export default Character