import React from 'react';


class Navbar extends React.Component {

  // showHome = () => {
  //   const {showDetails} = this.props;
  //   this.setState({
  //     showDetails: !showDetails
  //   })
  //   console.log(showDetails,'showHome');
  // }
  render() {
    const {displayDetails} = this.props;
  return (
    <div className="nav">
    <h1 className="title">Movie</h1>
    <h2 className ="title2"> World </h2>
    <div className= "search-container">
    <input placeholder="Quick Search" />
    </div>
    <p className="nav-titles" onClick={()=> displayDetails()}>Home </p>
    <p className="nav-titles">4K </p>
    <p className="nav-titles">Trending </p>
    <p className="nav-titles">Browse Movies</p>
    <p className="nav-titles"> Login | Register</p>
    </div>
  );
}
}

export default Navbar;
