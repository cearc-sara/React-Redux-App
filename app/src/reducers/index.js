import {FETCH_CHARACTERS, FETCH_CHARACTERS_SUCCESS, FETCH_CHARACTERS_ERROR} from "../actions/index"



export const initialState = {
    characters: [],
    loadingCharacters: false,
    errorMessage: ""
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CHARACTERS:
            return{
                ...state,
                loadingCharacters: true
            }
        case FETCH_CHARACTERS_ERROR:
            return{
                ...state,
                loadingCharacters:false,
                errorMessage:action.payload.message
            }
        case FETCH_CHARACTERS_SUCCESS:
            return{
                ...state,
                characters: action.payload,
                loadingCharacters:false
            }
       default:
           return state;
    }
}