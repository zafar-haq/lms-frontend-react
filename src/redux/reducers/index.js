import { combineReducers } from "redux";
import { loginReducer, dashboardReducer } from './adminReducers'

const reducers = combineReducers({
    adminAuth: loginReducer,
    adminDashboard: dashboardReducer
})

export default reducers
