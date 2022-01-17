import { call, put, takeEvery } from "@redux-saga/core/effects";
import axiosService from "../../services/axiosService";
import { getCounts, getCountsInterface } from '../actions/adminActions'

async function getCountsApi(token:string) {
    try {
        const response = await axiosService.send('admin/getCounts', token, {}, 'get')
        return response?.data.data
    } catch (e:any) {
        console.log(e.response)
    }
}

function* adminDashboard(payload:any):Generator<any, any, getCountsInterface['payload']> {
    const response = yield call(getCountsApi, payload.payload.token)
    yield put(getCounts(response))
}

function* adminLoginSaga() {
    yield takeEvery('ADMIN_DASHBOARD_REQUEST', adminDashboard)
    console.log("im here")
}

export default adminLoginSaga