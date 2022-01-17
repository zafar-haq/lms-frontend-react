import { adminActions } from "../actionTypes/adminActions";
import { setAdminViewClassesInterface, setAdminViewStudentsInterface, getCountsInterface, LoginInterface } from "../actions/adminActions"

const loginInitialState = {
    adminToken: '',
    authError: ''
}
export const loginReducer = (state = loginInitialState, action:LoginInterface) => {
    switch (action.type) {
        case adminActions.SET_AUTH:
            return {
                ...state,
                adminToken: (action.payload.hasOwnProperty('token')) ? action.payload.token : ''
            };
        case adminActions.REMOVE_AUTH:
            return {
                ...state,
                adminToken: action.payload
            }
        case adminActions.AUTH_ERROR:
            return {
                ...state,
                authError: action.payload.error
            }
        default:
            return state;
    }
}



const dashboardInitialState = {
    adminCount: 0,
    classCount: 0,
    instructorCount: 0,
    studentCount: 0
}
export const dashboardReducer = (state = dashboardInitialState, action:getCountsInterface) => {
    switch (action.type) {
        case adminActions.GET_COUNTS:
            return {
                ...state,
                adminCount: action.payload.adminCount,
                classCount: action.payload.classCount,
                instructorCount: action.payload.instructorCount,
                studentCount: action.payload.studentCount
            }
        default:
            return state
    }
}



interface adminViewStudentsInterface{
    students: Array<any>
}
const adminViewStudentsInitial = { students: [] }

export const adminViewStudentsReducer = (state:adminViewStudentsInterface = adminViewStudentsInitial, action:setAdminViewStudentsInterface) => {
    switch (action.type) {
        case adminActions.SET_ADMIN_VIEW_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        default:
            return state
    }
}



interface adminViewClassesInterface {
    classes: Array<any>
}
const adminViewClassesInitial = { classes: [] }

export const adminViewClassesReducer = (state:adminViewClassesInterface = adminViewClassesInitial, action:setAdminViewClassesInterface) => {
    switch (action.type) {
        case adminActions.SET_ADMIN_VIEW_CLASSES:
            return {
                ...state,
                classes: action.payload
            }
        default:
            return state
    }
}