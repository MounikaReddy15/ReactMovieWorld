import React from 'react';
import Navbar from './Navbar';
import MovieList from './MovieList';

class App extends React.Component {
  
render() {
  return (
    <div className="App">
    <Navbar />
    <div className= "main">
    <MovieList/>
    </div>
    </div>
  );
}
}


export default App;
