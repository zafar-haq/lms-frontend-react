import { combineReducers } from "redux";
import { loginReducer } from './adminReducers'

const reducers = combineReducers({
    adminAuth: loginReducer
})

export default reducers
