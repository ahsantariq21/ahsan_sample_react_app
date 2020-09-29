import React from 'react';
import './Header.css';
import { Route, Link } from "react-router-dom";

class Header extends React.Component {
render() {
    return (
      <div>
          <div class="header">
          <a href="#default" class="logo">TMDB Client</a>
          <div class="header-right">
            <a class="active" href="#home">Home</a>
            <a href="#favorites">Favorites</a>
            <a href="#upcomingmovies">Upcoming Movies</a>
            <a href="#search">Search</a>
          </div>
        </div>
        <div class="center-align-header"><b>All Movies</b></div>
      </div>
    );
  }
}

export default Header;