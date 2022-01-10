import { combineReducers } from "redux";
import { loginReducer, dashboardReducer, adminViewStudentsReducer, adminViewClassesReducer } from './adminReducers'
import { studentLoginReducer, studentViewClassesReducer, studentViewClassesToEnrollReducer } from "./studentReducer";

const reducers = combineReducers({
    adminAuth: loginReducer,
    adminDashboard: dashboardReducer,
    adminViewStudents: adminViewStudentsReducer,
    adminViewClasses: adminViewClassesReducer,
    studentAuth: studentLoginReducer,
    studentViewClasses: studentViewClassesReducer,
    studentViewClassesToEnroll: studentViewClassesToEnrollReducer
})

export default reducers
