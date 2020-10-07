import React from 'react';
import { Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Header from '../header/Header';
import Filter from '../filter/Filter';
import MovieDetails from '../moviedetails/MovieDetails';

function Home(props) {
        return (
        <div>
            <Header />
            <Filter />
        </div>
        );
}
export default Home;