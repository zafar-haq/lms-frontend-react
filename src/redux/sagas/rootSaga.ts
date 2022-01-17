import { all } from "redux-saga/effects";
import adminLoginSaga from './adminLoginSaga'
import adminDashboardSaga from './adminDashboardSaga'
import adminLogoutSaga from "./adminLogoutSaga";
import adminViewStudentsSaga from "./adminViewStudentsSaga";
import adminViewClassesSaga from "./adminViewClassesSaga";
import studentLoginSaga from "./studentLoginSaga";
import studentViewClassesSaga from "./studentViewClasses";
import studentViewClassesToEnrollSaga from "./studentViewClassesToEnrollSaga";
import studentLogoutSaga from "./studentLogoutSaga";
import instructorLoginSaga from "./instructorLoginSaga";
import instructorViewClassesSaga from "./instructorViewClassesSaga";

function* rootSaga() {
    yield all([
        adminLoginSaga(),
        adminDashboardSaga(),
        adminLogoutSaga(),
        adminViewStudentsSaga(),
        adminViewClassesSaga(),
        studentLoginSaga(),
        studentViewClassesSaga(),
        studentViewClassesToEnrollSaga(),
        studentLogoutSaga(),
        instructorLoginSaga(),
        instructorViewClassesSaga()
    ])
}

export default rootSaga