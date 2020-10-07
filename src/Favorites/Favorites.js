import React,  { useEffect, useState } from 'react';
import './Favorites.css';
import { Route, Link } from "react-router-dom";
import MoviesList from '../movieslist/MoviesList';
import FavouritesContext from '../contexts/FavouriteContext';
import Header from '../header/Header';

function Favorites (props) {

  const favList = React.useContext(FavouritesContext);

    return (
        <div>
          <Header />
      <h1>User added following movies to favourite list</h1>
      <ul>
        {favList.map((movie) => { return <li>{movie}</li>}

        )}
      </ul>
      </div>

    );
}

export default Favorites;