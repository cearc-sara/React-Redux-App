import React, { useEffect } from 'react';
import './App.css';
import {connect} from 'react-redux';
import CharacterList from "./components/characterList"
import {fetchCharacters} from "./actions/index"

function App(props) {
  const {fetchCharacters, loadingCharacters, errorMessage} = props

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters])

  return (
    <div className="App">
      <header>
      <h1 className='title'>Rick and Morty Characters</h1>
      </header>
      {!loadingCharacters ? (<CharacterList/>) : (<div>...Finding Mr. Sanchez</div>)}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
      
    </div>
  );
}

function mapStateToProps(state) {
  return{
    loadingCharacters: state.loadingCharacters,
    errorMessage: state.errorMessage,
  }
}

export default connect(mapStateToProps, {fetchCharacters})(App);
