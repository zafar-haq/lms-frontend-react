import { call, put, takeEvery } from "@redux-saga/core/effects";
import axiosService from "../../services/axiosService";
import { setAdminViewClasses } from '../actions/adminActions'

async function adminViewClassesApi(token:string) {
    try {
        return  await axiosService.send('admin/getClasses', token, {}, 'get')
    } catch (e:any) {
        console.log(e.response)
    }
}

function* adminViewClasses(payload:any):Generator<any, any, any> {
    const response = yield call(adminViewClassesApi, payload.payload.token)
    console.log("this is response", response.data.data)
    yield put(setAdminViewClasses(response.data.data))
}

function* adminViewClassesSaga() {
    yield takeEvery('ADMIN_VIEW_CLASSES_REQUEST', adminViewClasses)
}

export default adminViewClassesSaga