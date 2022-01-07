import { put, takeEvery } from "@redux-saga/core/effects";
import { removeAuth } from '../actions/adminActions'

function* adminLogout() {
    yield put(removeAuth(''))
}

function* adminLogoutSaga() {
    yield takeEvery('ADMIN_LOGOUT_REQUEST', adminLogout)
}

export default adminLogoutSaga