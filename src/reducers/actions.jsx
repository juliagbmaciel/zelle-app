export const SET_COMPLETE_NAME = 'SET_COMPLETE_NAME'
export const SET_SOCIAL_NAME = 'SET_SOCIAL_NAME'
export const RESET_STATE = 'RESET_STATE'


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

export const resetState = () => dispatch => {
    dispatch({
      type: RESET_STATE,
    });
};