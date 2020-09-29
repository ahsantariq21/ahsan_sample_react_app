import React from 'react';
import './Review.css';
import Header from '../header/Header';
import { Route, Link } from "react-router-dom";
import jokerImg from "../public/jokerjpg.jpg";
import axios from 'axios';

class Review extends React.Component {
    constructor(props) {
       super(props);
       this.state = { reviewList : []};
     }


render(props) {
 
  if(this.state.reviewList){
    return (
      <div >
         <Header />
         <table id="customers">
  <tr>
    <th>Author</th>
    <th>Excerpt</th>
    <th>More</th>
  </tr>
  {this.state.reviewList.map((value, index) => {
        return <tr>
        <td>{value.author}</td>
        <td>{value.content}</td>
        <td>Full Review</td>
      </tr>
      })}
  
</table>
      </div>
      
    );
  }
  else{
    return ('<div></div>');
  }
    
  }
  
  componentDidMount(){
    const { match: { params } } = this.props;
    console.log("Movie Id: " + params.movieId);

    axios.get('https://api.themoviedb.org/3/movie/'+params.movieId+'/reviews?api_key=d9e5ee6d9e768d35a57639023a6d8acc&language=en-US&page=1')
        .then(res => {
          this.setState({reviewList : res.data.results}); 
          console.log(res);
        });
  }
}

export default Review;

