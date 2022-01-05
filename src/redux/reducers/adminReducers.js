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
            return{
                ...state,
                authError: payload.error
            }
        default:
            return state;
    }
}

