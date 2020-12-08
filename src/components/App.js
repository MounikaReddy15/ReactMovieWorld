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
            id:''
            // isEmptyState: true
            // imageUrl: 'https://image.tmdb.org/t/p/w500'
        }
    }
  
   handleDetails = (moviee) => {
     console.log(moviee.id, "movie")
      this.setState ({
        cinema: moviee,
        id: moviee.id
      })
      this.displayDetails();
   }

  

   displayDetails = () => {
    const {showDetails} = this.state;
     this.setState({
      showDetails: !showDetails
     })
     console.log(showDetails, "show");
   }

  async componentDidMount () {
    
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c20cd7ee3a2836b554ed904651005ff9&language=en-US&page=1')
    const mov = await res.json();
    const results = mov.results;
    console.log(results);
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
    <Navbar displayDetails={this.displayDetails}/>
    {showDetails ? <MovieDetails movie={cinema}/>
    : <div className= "main"> 
    {movies.map((movie, index) => {
      if (index < 10) {
          return <MovieList 
          movie = {movie} 
          handleDetails={this.handleDetails}
          // displayDetails={this.displayDetails}
          // showDetails={showDetails}
        //   addTrip={this.triggerAddTripState}
        //   imageUrl = {imageUrl}
          key={`movies-${index}`
         
        } 
      
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
