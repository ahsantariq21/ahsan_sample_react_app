import React from 'react';
import { Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from '../header/Header';
import Filter from '../filter/Filter';
import MoviesList from '../movieslist/MoviesList';
import MovieDetails from '../moviedetails/MovieDetails';

class Home extends React.Component {
    render() {
        return (
        <div>
            <Header />
            <Filter />
            <MoviesList />
        </div>
        );
    }
}
export default Home;