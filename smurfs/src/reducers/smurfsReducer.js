import { FETCH_DATA, UPDATE_SMURFS, SET_ERROR, ADD_SMURF, POST_DATA } from '../actions';

const initialState = {
    smurfs: [],
    isFetchingData: false,
    isPostingData: false,
    error: ''
}

export const smurfsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
                smurfs: []
            };
        case UPDATE_SMURFS:
            return {
                ...state,
                isFetchingData: false,
                smurfs: action.payload
            }
        case POST_DATA:
            return {
                ...state,
                isPostingData: true
            }
        case ADD_SMURF:
            return {
                ...state,
                isPostingData: false,
                smurfs: [...state.smurfs, {name: action.payload.name, age: action.payload.age, height: action.payload.height, id: Date.now() }]
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state;
    }
};