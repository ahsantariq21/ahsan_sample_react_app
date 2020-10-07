import React,  { useContext, useEffect, useState } from 'react';
import './MoviesList.css';
import MovieDetails from '../moviedetails/MovieDetails';
import jokerImg from './Images/jokerjpg.jpg';
import invasionImg from './Images/invasion.jpg';
import axios from 'axios';
import FavouritesContext from '../contexts/FavouriteContext';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import { Route,  BrowserRouter as Router, Link, NavLink } from "react-router-dom";

function MoviesList(props) {

  var [moviesData, setMoviesData] = useState([]);
  //var [movieName, setMovieName] = useState(props.movieName);

   useEffect(() => {
     if(props.movieName) {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=d9e5ee6d9e768d35a57639023a6d8acc&language=en-US&page=1&include_adult=false&query=' + props.movieName)
      .then(res => {
        var movies = res.data.results;
        setMoviesData(movies);
      })
     }
     else {
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d9e5ee6d9e768d35a57639023a6d8acc&language=en-US&page=1')
      .then(res => {
        var movies = res.data.results;
        setMoviesData(movies);
        
      })
     }
   
  }, [props.movieName]);

  const favList = React.useContext(FavouritesContext);

    function addToFav(movieName) {
     //alert("hello");
     favList.push(movieName);
     NotificationManager.success('Movie Added to Favourites','Movie Added to Favourites');
    }

    if(moviesData){
      debugger
    return <div>{moviesData.map(function(d, idx){
      return (<div class="card float-dev">
                <img src={'http://image.tmdb.org/t/p/w185/'+d.backdrop_path} class="full-width" />
                <Link to={'/moviedetails/'+d.id}>{d.original_title}</Link>
               
                <p class="price">{d.release_date}</p>
                <p class="price">{d.vote_average}</p>
                <button onClick={() => addToFav(d.original_title)}>Add to Favorites</button>
                </div>)
   })}</div>
    }
    else{
      return <div>NO DATA</div>
    }
     
}

export default MoviesList;