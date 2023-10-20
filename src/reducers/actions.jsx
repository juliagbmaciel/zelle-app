export const SET_COMPLETE_NAME = 'SET_COMPLETE_NAME'
export const SET_SOCIAL_NAME = 'SET_SOCIAL_NAME'
export const RESET_STATE = 'RESET_STATE'
export const SET_TYPE_ACCOUNT = 'SET_TYPE_ACCOUNT'
export const SET_RG = 'SET_RG'
export const SET_CPF = 'SET_CPF'
export const SET_CNPJ = 'SET_CNPJ'
export const SET_INSC_ESTADUAL = 'SET_INSC_ESTADUAL'
export const SET_INSC_MUNICIPAL = 'SET_INSC_MUNICIPAL'
export const SET_TOKEN = 'SET_TOKEN'
export const SET_SIGNED = 'SET_SIGNED'



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

export const setCNPJ = cnpj => dispatch => {
  
  dispatch({
    type: SET_CNPJ,
    payload: cnpj
  });
};

export const setInscEstadual = inscEstadual => dispatch => {
  dispatch({
    type: SET_INSC_ESTADUAL,
    payload: inscEstadual
  });
};

export const setInscMunicipal = inscMunicipal => dispatch => {
  
  dispatch({
    type: SET_INSC_MUNICIPAL,
    payload: inscMunicipal
  });
};

export const setToken = token => dispatch => {
  
  dispatch({
    type: SET_TOKEN,
    payload: token
  });
};


export const setSigned = signed => dispatch => {
  
  dispatch({
    type: SET_SIGNED,
    payload: signed
  });
};


export const resetState = () => dispatch => {
    dispatch({
      type: RESET_STATE,
    });
};
