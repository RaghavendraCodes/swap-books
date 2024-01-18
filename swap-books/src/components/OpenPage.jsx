import React from 'react'
import { CarouselContainer } from './CarousalContainer.jsx'
import  LogoAnimation  from './LogoAnimation.jsx'
import Login from './Login.jsx'
import { Link } from 'react-router-dom'
import '../styles/main.css'

function OpenPage() {
  return (
    <div className="main-wrapper">
      <div className="main-overlay">
        <LogoAnimation></LogoAnimation>
        <div className='space-x-5 '>
            <Link to={'login'}>
          <button type="submit" className='px-10 py-3 bg-white rounded-3xl
           text-sm font-semibold hover:bg-slate-200' onClick={'login'}>Log In</button>
           </Link>
           <Link to={'signin'}>
          <button type="submit" className='px-10 py-3 bg-white rounded-3xl
           text-sm font-semibold hover:bg-slate-200'>Sign In</button>
           </Link>
      </div>
      </div>
      <CarouselContainer/>
    </div>
  )
}

export default OpenPage
