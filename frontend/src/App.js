import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as sessionActions from "./store/session";
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignUpFormPage';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SearchResultsPage from './components/SearchResultsPage';
import SingleHomePage from './components/SingleHomePage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded}/>
      <Switch>
        <Route path='/' exact >
          <HomePage />
        </Route>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
        <Route path='/search'>
          <SearchResultsPage />
        </Route>
        <Route path='/rentals/:id' exact>
          <SingleHomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
