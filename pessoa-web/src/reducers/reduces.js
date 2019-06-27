import {combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import usuarioReducer from './usuarioReducer';

const rootReducers  = combineReducers({
    toastr: toastrReducer,
    usuario: usuarioReducer,
})

export default rootReducers