import { call, put, takeEvery } from "@redux-saga/core/effects";
import axiosService from "../../services/axiosService";
import { setAuth, authError } from '../actions/instructorActions'

async function loginApi(email:string, password:string) {
    try {
        const response = await axiosService.send('instructor/login', '', { email: email, password: password }, 'post')
        return response
    } catch (e:any) {
        return { token: '', error: e.response.data }
    }
}

function* instructorLogin(payload:any):Generator<any, any, any> {
    const response = yield call(loginApi, payload.payload.email, payload.payload.password)
    if (response.hasOwnProperty('error')) {
        yield put(authError(response.error))
    } else {
        yield put(setAuth(response.data))
    }
}

function* instructorLoginSaga() {
    yield takeEvery('INSTRUCTOR_LOGIN_REQUEST', instructorLogin)
}

export default instructorLoginSaga