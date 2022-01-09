import { all } from "redux-saga/effects";
import adminLoginSaga from './adminLoginSaga'
import adminDashboardSaga from './adminDashboardSaga'
import adminLogoutSaga from "./adminLogoutSaga";
import adminViewStudentsSaga from "./adminViewStudentsSaga";
import adminViewClassesSaga from "./adminViewClassesSaga";

function* rootSaga() {
    yield all([
        adminLoginSaga(),
        adminDashboardSaga(),
        adminLogoutSaga(),
        adminViewStudentsSaga(),
        adminViewClassesSaga()
    ])
}

export default rootSaga