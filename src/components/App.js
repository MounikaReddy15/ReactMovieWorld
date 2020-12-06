import React from 'react';
import Navbar from './Navbar';
import MovieList from './MovieList';

class App extends React.Component {
  constructor(props) {
    super(props); 
        this.state = {
            movies: [],
            isLoaded: false,
            // imageUrl: 'https://image.tmdb.org/t/p/w500'
        }
    }
  

  async componentDidMount () {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c20cd7ee3a2836b554ed904651005ff9&language=en-US&page=1')
    const mov = await res.json();
    const results = mov.results;
    console.log(results);
   this.setState({
       movies:results,
       isLoaded:true
   })
  }
 render() {
     const { movies, isLoaded} = this.state;
     if(!isLoaded) {
        return <div>Loading....</div>
     }
  return (
    <div className="App">
    <Navbar />
    <div className= "main">
    {movies.map((movie, index) => {
          return <MovieList 
          movie = {movie} 
        //   imageUrl = {imageUrl}
          key={`movies-${index}`
        }
          />
        })}
    </div>
    </div>
  );
}
}


export default App;
