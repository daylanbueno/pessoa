import {combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducers  = combineReducers({
    toastr: toastrReducer,
})

export default rootReducers