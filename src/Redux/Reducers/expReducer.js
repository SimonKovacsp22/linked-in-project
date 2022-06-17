import { GET_SINGLE_USER_EXP } from "../Actions";

const initialState = {
    singleUserExperiences : []
}

const expReducer = (state=initialState, action) =>{
    switch (action.type) {
        case GET_SINGLE_USER_EXP:
            return {
                ...state,
                singleUserExperiences : [...action.payload]
            }
    
        default:
            return state;
    }
}
export default expReducer;