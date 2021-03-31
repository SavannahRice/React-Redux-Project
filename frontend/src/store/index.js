import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rentalReducer from './rentals';
import sessionReducer from './session';
import searchReducer from './search';

// function saveToLocalStorage(state){
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('state', serializedState)
//   } catch(e){
//     console.log(e)
//   }
// };

// function loadFromLocalStorage(){
//   try{
//     const serializedState = localStorage.getItem('state');
//     if(serializedState === null) return undefined;
//     return JSON.parse(serializedState)
//   } catch(e){
//     console.log(e)
//     return undefined
//   }
// }

// const persistedState = loadFromLocalStorage();

const rootReducer = combineReducers({
  session: sessionReducer,
  rentals: rentalReducer,
  search: searchReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

// configureStore.subscribe(() => saveToLocalStorage(configureStore.getState()))
  
  export default configureStore;