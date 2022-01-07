import { all } from "redux-saga/effects";
import adminLoginSaga from './adminLoginSaga'
import adminDashboardSaga from './adminDashboardSaga'
import adminLogoutSaga from "./adminLogoutSaga";

function* rootSaga() {
    yield all([
        adminLoginSaga(),
        adminDashboardSaga(),
        adminLogoutSaga()
    ])
}

export default rootSaga