import { 
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants'
 

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

export const requestRobots = (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
    .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}

//check if the action goes through
// export const setSearchField = (text) => {
//     console.log(text);
//     return {
//         type: CHANGE_SEARCHFIELD,
//         payload: text
//     }
// }    