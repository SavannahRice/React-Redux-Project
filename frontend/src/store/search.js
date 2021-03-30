const LOAD = 'search/LOAD';

const load = list => ({
    type: LOAD,
    list,
  
});

export const getSearchResults = (param) => async dispatch => {
    
    const response = await fetch(`/api/search/${param}`);

    if (response.ok){
        const list = await response.json();
        dispatch(load(list));
        // console.log(list);
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