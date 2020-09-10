import axios from 'axios'

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_ERROR = "FETCH_CHARACTER_ERROR";

export const fetchCharacters = (page) => {
    return (dispatch) => {
        dispatch({type: FETCH_CHARACTERS});
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then((res) => {
            console.log(res)
            dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results})
        })
        .catch((err) => {
            dispatch({type: FETCH_CHARACTERS_ERROR, payload: {message: "Whoops! Can't get your characters!"}})
        })
    }
}