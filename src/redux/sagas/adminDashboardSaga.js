import { call, put, takeEvery } from "@redux-saga/core/effects";
import axiosService from "../../services/axiosService";
import { getCounts } from '../actions/adminActions'

async function getCountsApi(token) {
    try {
        const response = await axiosService.send('admin/getCounts', token, {}, 'get')
        return response
    } catch (e) {
        console.log(e.response)
    }
}

function* adminDashboard(payload) {
    const response = yield call(getCountsApi, payload.payload.token)
    yield put(getCounts(response.data.data))
}

function* adminLoginSaga() {
    yield takeEvery('ADMIN_DASHBOARD_REQUEST', adminDashboard)
    console.log("im here")
}

export default adminLoginSaga