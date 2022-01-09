import { combineReducers } from "redux";
import { loginReducer, dashboardReducer, adminViewStudentsReducer, adminViewClassesReducer } from './adminReducers'

const reducers = combineReducers({
    adminAuth: loginReducer,
    adminDashboard: dashboardReducer,
    adminViewStudents: adminViewStudentsReducer,
    adminViewClasses: adminViewClassesReducer
})

export default reducers
