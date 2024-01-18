import React from 'react';
import '../styles/header.css'

const Header = () => {
  return (
    <div className='nav_bar'>
    <nav>
    <h1>Logo</h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Swap</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Profile</a></li>
    </ul>
  </nav>
  </div>
  );
};

export default Header;
