

export const initialUserState = {
    user: null,
    loading: false
}

export function userReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload, loading: false }
        case 'LOGOUT':
            return { ...state, user: null }
        case 'LOADING':
            return { ...state, loading: true }
        default:
            return state
    }
}