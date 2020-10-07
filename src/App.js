import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from './header/Header';
import MoviesList from './movieslist/MoviesList';
import MovieDetails from './moviedetails/MovieDetails';
import Home from './home/Home';
import Review from './review/Review';
import Favorites from './Favorites/Favorites';
import FavouritesContext from './contexts/FavouriteContext';

import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

function App() {
  return (
    
    <FavouritesContext.Provider value = {[]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Favorites">
          <Favorites/>
        </Route>
        <Route 
        path="/moviedetails/:movieId"
        component={MovieDetails} />
        <Route 
        path="/Review/:movieId"
        component={Review} />
      </Switch>
    </Router>
    </FavouritesContext.Provider>
    
  );
}


export default App;
