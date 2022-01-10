import { instructorActions } from "../actionTypes/instructorActions"


export const setAuth = value => {
    return {
        type: instructorActions.SET_AUTH,
        payload: value
    }
}

export const authError = value => {
    return {
        type: instructorActions.AUTH_ERROR,
        payload: value
    }
}

export const removeAuth = value => {
    return {
        type: instructorActions.REMOVE_AUTH_INSTRUCTOR,
        payload: value
    }
}

export const setInstructorViewClasses = value => {
    return {
        type: instructorActions.SET_INSTRUCTOR_VIEW_CLASSES,
        payload: value
    }
}