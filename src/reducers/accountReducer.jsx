import { SET_COMPLETE_NAME, SET_SOCIAL_NAME, RESET_STATE } from "./actions";

const initialSTate = {
    completeName: '',
    socialName: '',
    dateOfBirth: ''
}

function userReducer(state = initialSTate, action){
    switch (action.type) {
        case SET_COMPLETE_NAME: 
            return {...state, completeName: action.payload}
        case SET_SOCIAL_NAME: 
            return {...state, socialName: action.payload}
        case RESET_STATE:
            return initialSTate;
        default:
            return state;
    }
}


export default userReducer;