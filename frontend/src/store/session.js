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

//User login
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

//Retains the sesion user info on a refresh
export const sessionUserInfo = () => async dispatch => {
    const response = await csrfFetch('api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
}

//Creates a user account
export const userSignUp = (user) => async dispatch => {
    const { username, email, password } = user;
    const response = await csrfFetch('api/users', {
        method: "POST",
        body: JSON.stringify({
            username,
            email,
            password,
        })
    })
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