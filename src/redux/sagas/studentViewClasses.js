import { call, put, takeEvery } from "@redux-saga/core/effects";
import axiosService from "../../services/axiosService";
import { setStudentViewClasses } from '../actions/studentActions'

async function studentViewClassesApi(token) {
    try {
        return  await axiosService.send('student/getClasses', token, {}, 'get')
    } catch (e) {
        console.log(e.response)
    }
}

function* studentViewClasses(payload) {
    const response = yield call(studentViewClassesApi, payload.payload.token)
    console.log("this is response", response.data.data)
    yield put(setStudentViewClasses(response.data.data))
}

function* studentViewClassesSaga() {
    yield takeEvery('STUDENT_VIEW_CLASSES_REQUEST', studentViewClasses)
}

export default studentViewClassesSaga