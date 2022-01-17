import { studentActions } from "../actionTypes/studentActions";
import { setStudentViewClassesInterface, StudentLogin } from "../actions/studentActions";

const loginInitialState = {
    studentToken: '',
    authError: ''
}

export const studentLoginReducer = (state = loginInitialState, action:StudentLogin) => {
    switch (action.type) {
        case studentActions.SET_AUTH:
            return {
                ...state,
                studentToken: (action.payload.hasOwnProperty('token')) ? action.payload.token : ''
            };
        case studentActions.REMOVE_AUTH_STUDENT:
            localStorage.setItem('studentToken', '')
            return {
                ...state,
                studentToken: ''
            }
        case studentActions.AUTH_ERROR:
            console.log(action.payload)
            return {
                ...state,
                authError: action.payload.error
            }
        default:
            return state;
    }
}


interface ClassesInterface{
    classes: setStudentViewClassesInterface['payload']
}
const studentViewClassesInitial:ClassesInterface = { classes: [] }

export const studentViewClassesReducer = (state = studentViewClassesInitial, action:setStudentViewClassesInterface) => {
    switch (action.type){
        case studentActions.SET_STUDENT_VIEW_CLASSES:
            return{
                ...state,
                classes: action.payload
            }
        default:
            return state
    }
}

const studentViewClassesToEnrollInitial:ClassesInterface = { classes: [] }

export const studentViewClassesToEnrollReducer = (state = studentViewClassesToEnrollInitial, action:setStudentViewClassesInterface):ClassesInterface => {
    switch (action.type){
        case studentActions.SET_STUDENT_VIEW_CLASSES_TO_ENROLL:
            return{
                ...state,
                classes: action.payload
            }
        default:
            return state
    }
}