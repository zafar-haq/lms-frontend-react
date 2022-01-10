import { studentActions } from "../actionTypes/studentActions";

const loginInitialState = {
    studentToken: '',
    authError: ''
}

export const studentLoginReducer = (state = loginInitialState, { type, payload }) => {
    switch (type) {
        case studentActions.SET_AUTH:
            return {
                ...state,
                studentToken: (payload.hasOwnProperty('token')) ? payload.token : ''
            };
        case studentActions.REMOVE_AUTH_STUDENT:
            localStorage.setItem('studentToken', '')
            return {
                ...state,
                studentToken: payload
            }
        case studentActions.AUTH_ERROR:
            return {
                ...state,
                authError: payload.error
            }
        default:
            return state;
    }
}

const studentViewClassesInitial = { classes: [] }

export const studentViewClassesReducer = (state = studentViewClassesInitial, {type, payload}) => {
    switch (type){
        case studentActions.SET_STUDENT_VIEW_CLASSES:
            return{
                ...state,
                classes: payload
            }
        default:
            return state
    }
}

const studentViewClassesToEnrollInitial = { classes: [] }

export const studentViewClassesToEnrollReducer = (state = studentViewClassesToEnrollInitial, {type, payload}) => {
    switch (type){
        case studentActions.SET_STUDENT_VIEW_CLASSES_TO_ENROLL:
            return{
                ...state,
                classes: payload
            }
        default:
            return state
    }
}