import React, { useEffect, useState } from 'react';
import './App.css';
import { connect } from 'react-redux';
import CharacterList from "./components/characterList"
import { fetchCharacters } from "./actions/index"
import CircleLoader from 'react-spinners/CircleLoader'

function App(props) {
  const { fetchCharacters, loadingCharacters, errorMessage } = props
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchCharacters(page);
  }, [fetchCharacters, page])

  return (
    <div className="App">
      <header>

        <h1 className='title'>Rick and Morty Characters</h1>

      </header>
      <button onClick={() => setPage(() => { if (page <= 1) { setPage(4) } else { setPage(page - 1) } })}>Prev</button>
      <button onClick={() => setPage(1)}>1</button>
      <button onClick={() => setPage(2)}>2</button>
      <button onClick={() => setPage(3)}>3</button>
      <button onClick={() => setPage(4)}>4</button>
      <button onClick={() => setPage(() => { if (page >= 4) { setPage(1) } else { setPage(page + 1) } })}>Next</button>
      {!loadingCharacters ? (
      <CharacterList />) : 
      (<div className='loading'>
        <CircleLoader className='spinner' color={'orange'}/>Searching for Mr. Sanchez</div>)}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}

    </div>
  );
}

function mapStateToProps(state) {
  return {
    loadingCharacters: state.loadingCharacters,
    errorMessage: state.errorMessage,
  }
}

export default connect(mapStateToProps, { fetchCharacters })(App);
