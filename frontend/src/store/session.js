import {csrfFetch} from './csrf';


const LOAD = 'session/setUser';
const REMOVE = 'session/removeUser';


const setUser = user => ({
    type: LOAD,
    user,
});

const removeUser = user => ({
    type: REMOVE,
    user: null,
});

export const loadUser = (user) => async dispatch => {
    const { credential, password } = user;
    const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    
        const userInfo = await response.json();
        dispatch(setUser(userInfo));
        return userInfo;
}


const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
    case LOAD:
        newState = { ...state, user: action.user };
        return newState;
        return 
    case REMOVE:
        newState = {...state, user: action.user}
        return newState;
    default:
        return state
    }
}

export default sessionReducer;