import { all } from "redux-saga/effects";
import adminLoginSaga from './adminLoginSaga'

function* rootSaga() {
    yield all([
        adminLoginSaga(),
    ])
}

export default rootSaga