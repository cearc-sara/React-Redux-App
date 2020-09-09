import React from 'react';
import {connect} from 'react-redux';
import Character from './character';


function CharacterList(props) {
    return(
        <>
            {props.characters.map((character) => {
                return <Character key={character.id} character={character} />
            })}
        </>
    )
}

function mapStateToProps(state) {
    return{
        characters: state.characters
    }
}

export default connect(mapStateToProps, {})(CharacterList)