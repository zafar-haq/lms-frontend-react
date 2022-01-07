import { all } from "redux-saga/effects";
import adminLoginSaga from './adminLoginSaga'
import adminDashboardSaga from './adminDashboardSaga'
import adminLogoutSaga from "./adminLogoutSaga";
import adminViewStudentsSaga from "./adminViewStudentsSaga";

function* rootSaga() {
    yield all([
        adminLoginSaga(),
        adminDashboardSaga(),
        adminLogoutSaga(),
        adminViewStudentsSaga()
    ])
}

export default rootSaga