import { call, put, take, takeEvery } from "@redux-saga/core/effects";
import axiosService from "../../services/axiosService";
import { setAuth, authError } from '../actions/adminActions'

async function loginApi(email:string, password:string) {
    try {
        const response = await axiosService.send('admin/login', '', { email: email, password: password }, 'post')
        return response
    } catch (e:any) {
        return { token: '', error: e.response.data }
    }
}

function* adminLogin(payload:any):Generator<any, any, any> {
    const response = yield call(loginApi, payload.payload.email, payload.payload.password)
    if (response.hasOwnProperty('error')) {
        yield put(authError(response.error))
    } else {
        yield put(setAuth(response.data))
    }
}

function* adminLoginSaga() {
    yield takeEvery('ADMIN_LOGIN_REQUEST', adminLogin)
    // yield call(adminLogin, email, password)
}

export default adminLoginSaga