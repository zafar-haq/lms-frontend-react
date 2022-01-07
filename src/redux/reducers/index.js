import { combineReducers } from "redux";
import { loginReducer, dashboardReducer, adminViewStudentsReducer } from './adminReducers'

const reducers = combineReducers({
    adminAuth: loginReducer,
    adminDashboard: dashboardReducer,
    adminViewStudents: adminViewStudentsReducer
})

export default reducers
