import React from 'react';
import './Navbar.css'

function Navbar(props) {
  return(
    <nav className="navbar">
      <div className="brandDiv">
        <h1>Brand Name</h1>
      </div>
      <div className="navigation">
        <ul className="navList">
          <li className="navItem"><a className="navLink" href="#">Home</a></li>
          <li className="navItem"><a className="navLink" href="#">About</a></li>
          <li className="navItem"><a className="navLink" href="#">Contact</a></li>
        </ul>
      </div>
      <div></div>
    </nav>
  )
}

export default Navbar;
