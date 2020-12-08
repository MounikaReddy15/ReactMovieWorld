
import React from 'react';

const MovieList = (props) => {
  const { movie, handleDetails} = props;
  return (
  <div className="movie-list"> 
  <div>
    <div className="movie-card">
    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-poster"/>
    <h2 className="rating">{movie.vote_average} / 10</h2>
    <button className="button" onClick={()=> handleDetails(movie)} > View Details </button>
    </div>
    <h4 className ="movie-title">{movie.title}</h4>
    <p className="release-date">{movie.release_date}</p>
  </div>
</div>
);
}
  

export default MovieList;
