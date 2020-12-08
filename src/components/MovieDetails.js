
import React from 'react';



const MovieDetails = (props) => {
  const { movie} = props;
    return (
      <div className="movie-details">
        <div className="top">
          <div>
          <img className= "detail-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-poster"/>
          <button className="download-btn">Download</button>
          </div>
          <div>
           <h1 className="detail-title">{movie.title}</h1>
           <p className="detail-year">{movie.release_date}</p>
           <p className="detail-drama">Drama</p>
           <div className="detail-count"> 
            <h3>Vote Count </h3>
           <h2>{movie.vote_count}</h2>
           </div>
           <div className="detail-vote">
             <h3>Rating</h3>
           <h2>{movie.vote_average}</h2>
           </div>
          </div>
          <div className="similar">
          <h2>Synopsis</h2>
          <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    )
  }
  
export default MovieDetails;