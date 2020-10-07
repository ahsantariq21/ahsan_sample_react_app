import React,  { useEffect, useState } from 'react';
import './Filter.css';
import { Route, Link } from "react-router-dom";
import MoviesList from '../movieslist/MoviesList';
import FavouritesContext from '../contexts/FavouriteContext';

function Filter () {

   var [movieName, setMovieName] = useState();

   console.log("filter: " + movieName);

   debugger;
    return (
        <div>
      <div class="center-align">
        <div class = 'float-dev'>
            <label for="listfiltering">List Filtering</label>
            <input id="list_filtering" name="listfiltering" type="text" onBlur={e => setMovieName(e.target.value)}  />
            {/* <input id="list_filtering" name="listfiltering" type="text"  /> */}
        </div>

        <div>
            <label for="genre">Genre</label>
            <select id="genre" name="genre">
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Thriller">Thriller</option>
            </select>
        </div> <br/>

        <div class = 'float-dev'>
            <label for="genre">Release Date</label>
            <select id="release-date" name="releasedate">
                <option value="All">All</option>               
            </select>
        </div>
        <div class = 'float-dev'>
            <label for="rating">Rating</label>
            <select id="rating" name="rating">
                <option value="All">All</option>               
            </select>
        </div>
        <div class = 'float-dev'>
            <label for="genre">Sort By</label>
            <select id="sort-by" name="sortby">
                <option value="Popularity">Popularity</option>               
            </select>
        </div>
        <div>
            <label for="genre">Language</label>
            <select id="language" name="language">
                <option value="All">All</option>               
            </select>
        </div>
      </div>
      
     
     
        <MoviesList movieName = {movieName}/>
        <MoviesList />
      
      </div>

    );
}

export default Filter;