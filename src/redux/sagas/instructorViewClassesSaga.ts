import { call, put, takeEvery } from "@redux-saga/core/effects";
import axiosService from "../../services/axiosService";
import { setInstructorViewClasses } from '../actions/instructorActions'

async function instructorViewClassesApi(token:string) {
    try {
        return  await axiosService.send('instructor/getClass', token, {}, 'get')
    } catch (e:any) {
        console.log(e.response)
    }
}

function* instructorViewClasses(payload:any):Generator<any, any, any> {
    const response = yield call(instructorViewClassesApi, payload.payload.token)
    console.log("this is response", response.data.data)
    yield put(setInstructorViewClasses(response.data.data))
}

function* instructorViewClassesSaga() {
    yield takeEvery('INSTRUCTOR_VIEW_CLASSES_REQUEST', instructorViewClasses)
}

export default instructorViewClassesSaga