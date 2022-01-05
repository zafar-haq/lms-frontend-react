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