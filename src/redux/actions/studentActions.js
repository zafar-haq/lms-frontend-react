import { studentActions } from "../actionTypes/studentActions"


export const setAuth = value => {
    return {
        type: studentActions.SET_AUTH,
        payload: value
    }
}

export const authError = value => {
    return {
        type: studentActions.AUTH_ERROR,
        payload: value
    }
}

export const removeAuth = value => {
    return {
        type: studentActions.REMOVE_AUTH_STUDENT,
        payload: value
    }
}

export const setStudentViewClasses = value => {
    return {
        type: studentActions.SET_STUDENT_VIEW_CLASSES,
        payload: value
    }
}

export const setStudentViewClassesToEnroll = value => {
    return {
        type: studentActions.SET_STUDENT_VIEW_CLASSES_TO_ENROLL,
        payload: value
    }
}