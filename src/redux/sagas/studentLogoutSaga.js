import { put, takeEvery } from "@redux-saga/core/effects";
import { removeAuth } from '../actions/studentActions'

function* studentLogout() {
    yield put(removeAuth(''))
}

function* studentLogoutSaga() {
    yield takeEvery('STUDENT_LOGOUT_REQUEST', studentLogout)
}

export default studentLogoutSaga