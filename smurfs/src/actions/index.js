import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURFS = "UPDATE_SMURFS";
export const SET_ERROR = "SET_ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const POST_DATA = "POST_DATA";

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA});
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res.data)
        dispatch({type: UPDATE_SMURFS, payload: res.data})
    })
    .catch(err => {
        console.error(err.response);
        dispatch({type: SET_ERROR, payload: 'error fetching data from API!'}) 
    })
};

export const postData = (props) => dispatch => {
    dispatch({type: POST_DATA});
    axios.post('http://localhost:3333/smurfs', props)
   .then(res => {
       console.log(res.data)
    //    dispatch({type: ADD_SMURF, payload: res.data})
   })
   .catch(err => {
       console.error(err); 
       dispatch({ type: SET_ERROR, payload: 'error sending data to API!' })
   })
};