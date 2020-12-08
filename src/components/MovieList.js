
import React from 'react';
// import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';




class MovieList extends React.Component {
  // constructor(props) {
  //   super(props); 
  //       this.state = {
  //           showDetails: true
  //       }
  //     }

    //   handleDetails = () => {
    //     console.log('handle details')
    //     console.log(this.state.showDetails, "before")
    //     const { showDetails } = this.state;
    //     this.setState({
    //         showDetails:!showDetails
    //     })
    //     console.log(this.state.showDetails)
    // }

  render() {
    const { movie, handleDetails} = this.props;
    // const { showDetails } = this.state;
    // const history = useHistory();
    // console.log(showDetails, "show Details");
    console.log('movie', movie)
  return (
<div className="movie-list"> 
      {/* { showDetails ? */}
<div>
 <div className="movie-card">
    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie-poster"/>
    <h2 className="rating">{movie.vote_average} / 10</h2>
    <button className="button" onClick={()=> handleDetails(movie)} > View Details </button>
    
 </div>
    <h4 className ="movie-title">{movie.title}</h4>
    <p className="release-date">{movie.release_date}</p>
    
</div>

     {/* : */}
    {/* <div>
    
    <MovieDetails  movie = {movie} />
    
    </div> */}
  {/* } */}
</div>
      
  );
  }
  }



export default MovieList;
// onClick={() =>
    //    history.replace({pathname: './MovieDetails'})}> View Details </button>
    // component={Link} to="./MovieDetails.js"
    // onClick={props.addTrip}