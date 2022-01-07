import { adminActions } from "../actionTypes/adminActions"


export const setAuth = value => {
    return {
        type: adminActions.SET_AUTH,
        payload: value
    }
}

export const authError = value => {
    return {
        type: adminActions.AUTH_ERROR,
        payload: value
    }
}

export const removeAuth = value => {
    return {
        type: adminActions.REMOVE_AUTH,
        payload: value
    }
}

export const getCounts = value => {
    return {
        type: adminActions.GET_COUNTS,
        payload: value
    }
}

export const setAdminViewStudents = value => {
    return {
        type: adminActions.SET_ADMIN_VIEW_STUDENTS,
        payload: value
    }
}