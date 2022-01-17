import { adminActions } from "../actionTypes/adminActions"


// {--------------Admin Login Actions------------}
export interface LoginInterface{
    type: string,
    payload: {
        token: string,
        error: string
    }
}
export const setAuth = (value: LoginInterface['payload']) => {
    return {
        type: adminActions.SET_AUTH,
        payload: value
    }
}
export const authError = (value: LoginInterface['payload']) => {
    return {
        type: adminActions.AUTH_ERROR,
        payload: value
    }
}
export const removeAuth = (value: LoginInterface['payload']) => {
    return {
        type: adminActions.REMOVE_AUTH,
        payload: value
    }
}


// {--------------View Dashboard------------}
export interface getCountsInterface {
    type: string,
    payload: {
        adminCount: number,
        classCount: number,
        instructorCount: number,
        studentCount: number
    }
}
export const getCounts = (value: getCountsInterface['payload']) => {
    return {
        type: adminActions.GET_COUNTS,
        payload: value
    }
}


// {--------------View Students------------}
export interface setAdminViewStudentsInterface {
    type: string,
    payload: {
        id: number,
        name: string,
        email: string
    }[]
}
export const setAdminViewStudents = (value: setAdminViewStudentsInterface['payload']) => {
    return {
        type: adminActions.SET_ADMIN_VIEW_STUDENTS,
        payload: value
    }
}


// {--------------View Classes------------}
export interface setAdminViewClassesInterface {
    type: String,
    payload: {
        id: Number,
        course_name: String,
        strength: Number,
        enrolledStudents: Number,
        Students: Array<any>
        Instructors: Array<any>
    }[]
}
export const setAdminViewClasses = (value: setAdminViewClassesInterface['payload']) => {
    return {
        type: adminActions.SET_ADMIN_VIEW_CLASSES,
        payload: value
    }
}