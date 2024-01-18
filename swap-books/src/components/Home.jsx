import React from 'react'
import { CarouselContainer } from './CarousalContainer.jsx';
import '../styles/main.css'
import '../styles/carousel.css'
import LogoAnimation from './LogoAnimation.jsx';
import '../styles/home.css'
import Header from './Header.jsx';

function Home() {
  return (
    <body>
        <div className="main-wrapper">
            <div className="main-overlay">
        </div>
        <CarouselContainer/>
        </div>
    </body>
  )
}

export default Home
