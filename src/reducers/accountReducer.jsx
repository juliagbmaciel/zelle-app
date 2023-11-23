import {
    SET_COMPLETE_NAME,
    SET_SOCIAL_NAME,
    RESET_STATE,
    SET_TYPE_ACCOUNT,
    SET_RG,
    SET_CPF,
    SET_INSC_ESTADUAL,
    SET_CNPJ,
    SET_INSC_MUNICIPAL,
    SET_TOKEN,
    SET_SIGNED,
    SET_DATE_OF_BIRTH,
    SET_CLIENT_DATA,
    SET_ACCOUNT_DATA,
    SET_TRANSFER_DATA
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
    inscMunicipal: '',
    token: '',
    refresh: '',
    signed: false,
    clientData: {},
    accountData: {},
    transferData: {}
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
        case SET_INSC_MUNICIPAL:
            return { ...state, inscMunicipal: action.payload }
        case SET_INSC_ESTADUAL:
            return { ...state, inscEstadual: action.payload }
        case SET_CNPJ:
            return { ...state, cnpj: action.payload }
        case SET_TOKEN:
            return { ...state, token: action.payload }
        case SET_SIGNED:
            return { ...state, signed: action.payload }
        case SET_DATE_OF_BIRTH:
            return { ...state, dateOfBirth: action.payload }
        case SET_CLIENT_DATA:
            return { ...state, clientData: action.payload }
        case SET_ACCOUNT_DATA:
            return { ...state, accountData: action.payload }
        case SET_TRANSFER_DATA:
                return { ...state, transferData: action.payload }
        default:
            return state;
    }
}


export default userReducer;