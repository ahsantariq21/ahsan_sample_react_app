import React from 'react';
import './MovieDetails.css';
import Header from '../header/Header';
import { Route, Link } from "react-router-dom";
import jokerImg from "../public/jokerjpg.jpg";
import Review from '../review/Review';
import axios from 'axios';

class MovieDetails extends React.Component {
    constructor(props) {
       super(props);
      
      this.state = {id:0, poster_path : "", title: "", overview: "", runtime: 0, release_date: "0", Genres:[],spoken_languages:[]};
      //  var movieId = this.props.match.params.movieId;
      //  console.log("Movie Id: " + movieId);
     }


render(props) {
  if(this.state.poster_path){
    return (
      <div >
         <Header />
      <div class="container">
        <div class="one" ><img src={'http://image.tmdb.org/t/p/w185/'+this.state.poster_path} /> </div>
        <div class="two">
          <h1>{this.state.title}</h1> 

          <h2>Overview</h2>
          <p>{this.state.overview}</p>
          <p>Runtime(min.): {this.state.runtime} </p>
          <p>Release Date: {this.state.release_date}</p>
          <p>Genres: </p>
          <p>Spoken Language: </p>
         </div>

         
         </div>
         
         <Link to={'/Review/'+this.state.id}><a class="review-btn">Show Reviews (Extracts)</a></Link>
      </div>
      
    );
  }
  else{
    return (<div></div>);
  }
    
  }
  componentDidMount(){
    const { match: { params } } = this.props;
    console.log("Movie Id: " + params.movieId);

    axios.get('https://api.themoviedb.org/3/movie/'+params.movieId+'?api_key=d9e5ee6d9e768d35a57639023a6d8acc&language=en-US')
        .then(res => {
          
          this.setState({id: params.movieId,poster_path : res.data.poster_path, title: res.data.title, overview: res.data.overview, runtime: res.data.runtime, release_date: res.data.release_date, Genres:res.data.Genres,spoken_languages:res.data.spoken_languages}); 
          
          console.log(this.state);
        });
  }
}

export default MovieDetails;

