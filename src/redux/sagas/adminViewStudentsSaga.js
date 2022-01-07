import { call, put, takeEvery } from "@redux-saga/core/effects";
import axiosService from "../../services/axiosService";
import { setAdminViewStudents } from '../actions/adminActions'

async function adminViewStudentsApi(token) {
    try {
        return  await axiosService.send('admin/getStudents', token, {}, 'get')
    } catch (e) {
        console.log(e.response)
    }
}

function* adminViewStudents(payload) {
    const response = yield call(adminViewStudentsApi, payload.payload.token)
    console.log("this is response", response.data.data)
    yield put(setAdminViewStudents(response.data.data))
}

function* adminViewStudentsSaga() {
    yield takeEvery('ADMIN_VIEW_STUDENTS_REQUEST', adminViewStudents)
}

export default adminViewStudentsSaga