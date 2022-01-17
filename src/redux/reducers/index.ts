import { combineReducers } from "redux";
import { loginReducer, dashboardReducer, adminViewStudentsReducer, adminViewClassesReducer } from './adminReducers'
import { instructorLoginReducer, instructorViewClassesReducer } from "./instructorReducer";
import { studentLoginReducer, studentViewClassesReducer, studentViewClassesToEnrollReducer } from "./studentReducer";

const reducers = combineReducers({
    adminAuth: loginReducer,
    adminDashboard: dashboardReducer,
    adminViewStudents: adminViewStudentsReducer,
    adminViewClasses: adminViewClassesReducer,
    studentAuth: studentLoginReducer,
    studentViewClasses: studentViewClassesReducer,
    studentViewClassesToEnroll: studentViewClassesToEnrollReducer,
    instructorAuth: instructorLoginReducer,
    instructorViewClasses: instructorViewClassesReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
