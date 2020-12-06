import React from 'react';


class MovieList extends React.Component {

  render() {
    const { movie} = this.props;
    
  return (
    <div className="movie-list">
    <div className="movie-card">
    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-poster"/>
    <h2 className="rating">{movie.vote_average} / 10</h2>
    <button className="button">View Details</button>
    </div>
    <h4 className ="movie-title">{movie.title}</h4>
    <p>{movie.release_date}</p>
   
   </div>
  );
}
}

export default MovieList;
