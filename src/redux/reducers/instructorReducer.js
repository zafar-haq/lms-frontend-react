import { instructorActions } from "../actionTypes/instructorActions";

const loginInitialState = {
    instructorToken: '',
    authError: ''
}

export const instructorLoginReducer = (state = loginInitialState, { type, payload }) => {
    switch (type) {
        case instructorActions.SET_AUTH:
            return {
                ...state,
                instructorToken: (payload.hasOwnProperty('token')) ? payload.token : ''
            };
        case instructorActions.REMOVE_AUTH_INSTRUCTOR:
            localStorage.setItem('instructorToken', '')
            return {
                ...state,
                instructorToken: payload
            }
        case instructorActions.AUTH_ERROR:
            return {
                ...state,
                authError: payload.error
            }
        default:
            return state;
    }
}

const instructorViewClassesInitial = { classes: [] }

export const instructorViewClassesReducer = (state = instructorViewClassesInitial, {type, payload}) => {
    switch (type){
        case instructorActions.SET_INSTRUCTOR_VIEW_CLASSES:
            return{
                ...state,
                classes: [payload]
            }
        default:
            return state
    }
}
