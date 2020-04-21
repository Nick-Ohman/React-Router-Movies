import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div>
    <Link className = "home-button" to='/'>Home</Link>
    </div>
  </div>
);

export default SavedList;
