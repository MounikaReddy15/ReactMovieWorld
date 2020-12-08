import React from 'react';


const Navbar = () => {
  return (
    <div className="nav">
    <h1 className="title">Movie</h1>
    <h2 className ="title2"> World </h2>
    <div className= "search-container">
    <input placeholder="Quick Search" />
    </div>
    <p className="nav-titles" >Home </p>
    <p className="nav-titles">4K </p>
    <p className="nav-titles">Trending </p>
    <p className="nav-titles">Browse Movies</p>
    <p className="nav-titles"> Login | Register</p>
    </div>
  );
}


export default Navbar;
