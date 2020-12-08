import React from 'react';
import Navbar from './Navbar';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

class App extends React.Component {
  constructor(props) {
    super(props); 
        this.state = {
          movies: [],
          isLoaded: false,
          cinema: '',
          showDetails: false,
        }
  }
  
  // to pass movie to movie detail page
handleDetails = (moviee) => {
  this.setState ({
    cinema: moviee,
  })
  this.displayDetails();
}

  
// to show details/home page
displayDetails = () => {
  const {showDetails} = this.state;
  this.setState({
    showDetails: !showDetails
  })
}

//  to fetch api data
async componentDidMount () {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c20cd7ee3a2836b554ed904651005ff9&language=en-US&page=1')
  const mov = await res.json();
  const results = mov.results;
  this.setState({
    movies:results,
    isLoaded:true,
  })
}


 render() {
  const { movies, isLoaded,showDetails,cinema} = this.state;
    if(!isLoaded) {
      return <div>Loading....</div>
    }
  return (
    
    <div className="App">
    <Navbar />
    {showDetails ? <MovieDetails movie={cinema} displayDetails={this.displayDetails}/>
    : <div className= "main"> 
    {movies.map((movie, index) => {
      if (index < 10) {
        return <MovieList 
        movie = {movie} 
        handleDetails={this.handleDetails}
        key={`movies-${index}`} 
      />
      }
    })}
  </div>
 }
</div>
);
}
}

export default App;
