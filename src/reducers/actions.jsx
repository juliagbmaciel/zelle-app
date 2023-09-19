export const SET_COMPLETE_NAME = 'SET_COMPLETE_NAME'
export const SET_SOCIAL_NAME = 'SET_SOCIAL_NAME'
export const RESET_STATE = 'RESET_STATE'
export const SET_TYPE_ACCOUNT = 'SET_TYPE_ACCOUNT'
export const SET_RG = 'SET_RG'
export const SET_CPF = 'SET_CPF'


export const setCompleteName = name => dispatch => {
    dispatch({
        type: SET_COMPLETE_NAME, 
        payload: name
    })
}

export const setSocialName = name => dispatch => {
    dispatch({
        type: SET_SOCIAL_NAME, 
        payload: name
    })
}

export const setTypeAccount = type => dispatch => {
    dispatch({
      type: SET_TYPE_ACCOUNT,
      payload: type
    });
};

export const setRG = rg => dispatch => {
    dispatch({
      type: SET_RG,
      payload: rg
    });
};

export const setCPF = cpf => dispatch => {
    dispatch({
      type: SET_CPF,
      payload: cpf
    });
};


export const resetState = () => dispatch => {
    dispatch({
      type: RESET_STATE,
    });
};
