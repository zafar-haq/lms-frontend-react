import { instructorActions } from "../actionTypes/instructorActions";
import { setInstructorViewClassesInterface } from "../actions/instructorActions"

const loginInitialState = {
    instructorToken: '',
    authError: ''
}

export const instructorLoginReducer = (state = loginInitialState, action:any) => {
    switch (action.type) {
        case instructorActions.SET_AUTH:
            return {
                ...state,
                instructorToken: (action.payload.hasOwnProperty('token')) ? action.payload.token : ''
            };
        case instructorActions.REMOVE_AUTH_INSTRUCTOR:
            localStorage.setItem('instructorToken', '')
            return {
                ...state,
                instructorToken: action.payload
            }
        case instructorActions.AUTH_ERROR:
            return {
                ...state,
                authError: action.payload.error
            }
        default:
            return state;
    }
}


interface InstructorViewClassesInterface{
    classes: Array<any>
}

const instructorViewClassesInitial = { classes: [] }

export const instructorViewClassesReducer = (state:InstructorViewClassesInterface = instructorViewClassesInitial, action:setInstructorViewClassesInterface) => {
    switch (action.type){
        case instructorActions.SET_INSTRUCTOR_VIEW_CLASSES:
            return{
                ...state,
                classes: [action.payload]
            }
        default:
            return state
    }
}
