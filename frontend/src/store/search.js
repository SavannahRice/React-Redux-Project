import {csrfFetch} from './csrf';
const LOAD = 'search/LOAD';

const load = list => ({
    type: LOAD,
    list,
  
});

// export const getSearchResults = (param) => async dispatch => {
    
//     const response = await csrfFetch(`/api/search/${param}`);

//     if (response.ok){
//         const list = await response.json();
//         dispatch(load(list));
//         // console.log(list);
//         return list;
//     }

// };

export const getSearchResults = (searchParams) => async dispatch => {
    const {startDate, endDate, searchQuery} = searchParams;
    const response = await csrfFetch(`/api/search/${searchQuery}`, {
        method: "POST",
        body: JSON.stringify({
            startDate,
            endDate,
        }),
    });

    if (response.ok){
        const list = await response.json();
        dispatch(load(list));
        return list;
    }

};

const initialState = {
    search: []
}
const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD: {
            return {...state, search: [...action.list]}
        }
        default:
            return state;
    }
}

export default searchReducer;