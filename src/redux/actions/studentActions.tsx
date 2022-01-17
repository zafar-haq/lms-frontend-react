import { studentActions } from "../actionTypes/studentActions"

// {--------------Student Login Actions------------}
export interface StudentLogin {
    type: String,
    payload: {
        token: string,
        error: string
    }
}
export const setAuth = (value:StudentLogin['payload']) => {
    return {
        type: studentActions.SET_AUTH,
        payload: value
    }
}
export const authError = (value:StudentLogin['payload']) => {
    return {
        type: studentActions.AUTH_ERROR,
        payload: value
    }
}
export const removeAuth = (value:StudentLogin['payload']) => {
    return {
        type: studentActions.REMOVE_AUTH_STUDENT,
        payload: value
    }
}

// {--------------View Classes Actions------------}

export interface setStudentViewClassesInterface {
    type: String,
    payload: {
        id: number,
        course_name: string,
        strength: number,
        enrolledStudents: number,
        Instructors: Array<any>,
        createdAt: string
    }[]
}
export const setStudentViewClasses = (value:setStudentViewClassesInterface['payload']) => {
    return {
        type: studentActions.SET_STUDENT_VIEW_CLASSES,
        payload: value
    }
}

// {--------------View Classes To Enroll Actions------------}

export const setStudentViewClassesToEnroll = (value:setStudentViewClassesInterface['payload']) => {
    return {
        type: studentActions.SET_STUDENT_VIEW_CLASSES_TO_ENROLL,
        payload: value
    }
}