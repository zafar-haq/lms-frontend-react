import { call, put, takeEvery } from "@redux-saga/core/effects";
import axiosService from "../../services/axiosService";
import { setAuth, authError } from '../actions/studentActions'

async function loginApi(email:string, password:string) {
    try {
        const response = await axiosService.send('student/login', '', { email: email, password: password }, 'post')
        return response
    } catch (e:any) {
        return { token: '', error: e.response.data }
    }
}

function* studentLogin(payload:any):Generator<any, any, any> {
    const response = yield call(loginApi, payload.payload.email, payload.payload.password)
    if (response.hasOwnProperty('error')) {
        yield put(authError(response.error))
    } else {
        yield put(setAuth(response.data))
    }
}

function* studentLoginSaga() {
    yield takeEvery('STUDENT_LOGIN_REQUEST', studentLogin)
}

export default studentLoginSaga