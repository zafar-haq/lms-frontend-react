import { adminActions } from "../actionTypes/adminActions";

const loginInitialState = {
    adminToken: '',
    authError: ''
}

export const loginReducer = (state = loginInitialState, { type, payload }) => {
    switch (type) {
        case adminActions.SET_AUTH:
            return {
                ...state,
                adminToken: (payload.hasOwnProperty('token')) ? payload.token : ''
            };
        case adminActions.REMOVE_AUTH:
            return {
                ...state,
                adminToken: payload
            }
        case adminActions.AUTH_ERROR:
            return {
                ...state,
                authError: payload.error
            }
        default:
            return state;
    }
}

const dashboardInitialState = {
    "adminCount": 0,
    "classCount": 0,
    "instructorCount": 0,
    "studentCount": 0
}

export const dashboardReducer = (state = dashboardInitialState, {type, payload}) => {
    switch (type){
        case adminActions.GET_COUNTS:
            return{
                ...state,
                adminCount: payload.adminCount,
                classCount: payload.classCount,
                instructorCount: payload.instructorCount,
                studentCount: payload.studentCount
            }
        default:
            return state
    }
}

const adminViewStudentsInitial = { students: [] }

export const adminViewStudentsReducer = (state = adminViewStudentsInitial, {type, payload}) => {
    switch (type){
        case adminActions.SET_ADMIN_VIEW_STUDENTS:
            return{
                ...state,
                students: payload
            }
        default:
            return state
    }
}
