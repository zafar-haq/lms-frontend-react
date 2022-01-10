import { call, put, takeEvery } from "@redux-saga/core/effects";
import axiosService from "../../services/axiosService";
import { setStudentViewClassesToEnroll } from '../actions/studentActions'

async function studentViewClassesToEnrollApi(token) {
    try {
        return  await axiosService.send('student/getClassesToEnroll', token, {}, 'get')
    } catch (e) {
        console.log(e.response)
    }
}

function* studentViewClassesToEnroll(payload) {
    const response = yield call(studentViewClassesToEnrollApi, payload.payload.token)
    console.log("this is response", response.data.data)
    yield put(setStudentViewClassesToEnroll(response.data.data))
}

function* studentViewClassesToEnrollSaga() {
    yield takeEvery('STUDENT_VIEW_CLASSES_TO_ENROLL_REQUEST', studentViewClassesToEnroll)
}

export default studentViewClassesToEnrollSaga