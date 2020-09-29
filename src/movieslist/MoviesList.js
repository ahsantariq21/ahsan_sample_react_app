import React from 'react';
import './MoviesList.css';
import MovieDetails from '../moviedetails/MovieDetails';
import jokerImg from './Images/jokerjpg.jpg';
import invasionImg from './Images/invasion.jpg';
import axios from 'axios';

import { Route,  BrowserRouter as Router, Link, NavLink } from "react-router-dom";

class MoviesList extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {moviesData : [], relativeImgPath: 'http://image.tmdb.org/t/p/w185/'};

     }

render() {
  
  console.log(this.state.moviesData);
    if(this.state.moviesData.results){
      return (
        <div>
        {
        this.state.moviesData.results.map(function(d, idx){
          return (<div class="card float-dev">
                    <img src={'http://image.tmdb.org/t/p/w185/'+d.backdrop_path} class="full-width" />
                    <Link to={'/moviedetails/'+d.id}>{d.original_title}</Link>
                   
                    <p class="price">{d.release_date}</p>
                    <p class="price">{d.vote_average}</p>
                    <p><button>Add to Favorites</button></p>
                    </div>)
       })
       }
      
         
        </div>
      );
    }
    else{
return (<div></div>);
    }
 
  }

  componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=d9e5ee6d9e768d35a57639023a6d8acc&language=en-US&page=1')
        .then(res => {
          const movies = res.data;
          console.log(movies);
          this.setState({ moviesData : movies });  // setting state will rerender component
      
          console.log(this.state.moviesData);
        });
  }

}

export default MoviesList;