import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './accountReducer'


const rootReducer = combineReducers({userReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk))