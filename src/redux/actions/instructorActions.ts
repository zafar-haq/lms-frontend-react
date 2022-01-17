import { instructorActions } from "../actionTypes/instructorActions"


export const setAuth = (value:any) => {
    return {
        type: instructorActions.SET_AUTH,
        payload: value
    }
}

export const authError = (value:any) => {
    return {
        type: instructorActions.AUTH_ERROR,
        payload: value
    }
}

export const removeAuth = (value:any) => {
    return {
        type: instructorActions.REMOVE_AUTH_INSTRUCTOR,
        payload: value
    }
}

export interface setInstructorViewClassesInterface{
    type: string,
    payload: {
        id: Number,
        course_name: String,
        strength: Number,
        enrolledStudents: Number,
        Students: Array<any>
    }
}

export const setInstructorViewClasses = (value:setInstructorViewClassesInterface['payload']) => {
    return {
        type: instructorActions.SET_INSTRUCTOR_VIEW_CLASSES,
        payload: value
    }
}

