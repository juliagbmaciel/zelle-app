import {
    SET_COMPLETE_NAME,
    SET_SOCIAL_NAME,
    RESET_STATE,
    SET_TYPE_ACCOUNT,
    SET_RG, 
    SET_CPF
} from "./actions";

const initialSTate = {
    completeName: '',
    socialName: '',
    dateOfBirth: '',
    accountType: '',
    rg: '',
    cpf: '',
    cnpj: '',
    inscEstadual: '',
    inscMunicipal: ''
}

function userReducer(state = initialSTate, action) {
    switch (action.type) {
        case SET_COMPLETE_NAME:
            return { ...state, completeName: action.payload }
        case SET_SOCIAL_NAME:
            return { ...state, socialName: action.payload }
        case RESET_STATE:
            return initialSTate;
        case SET_TYPE_ACCOUNT:
            return { ...state, accountType: action.payload }
        case SET_RG:
            return { ...state, rg: action.payload }
        case SET_CPF:
            return { ...state, cpf: action.payload }
        default:
            return state;
    }
}


export default userReducer;