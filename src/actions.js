import { CHANGE_SEARCHFIELD } from './constants'

export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})

//check if the action goes through
// export const setSearchField = (text) => {
//     console.log(text);
//     return {
//         type: CHANGE_SEARCHFIELD,
//         payload: text
//     }
// }    