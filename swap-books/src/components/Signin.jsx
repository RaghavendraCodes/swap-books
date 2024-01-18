import React from 'react'
import { CarouselContainer } from './CarousalContainer.jsx';
import '../styles/Signin.css'
import '../styles/main.css'
import '../styles/carousel.css'

function Signin() {
  return (
    <div className="main-wrapper">
      <div className="main-overlay">
      <div class = "wrapper">
        <form action ="">
            <h1>Sign In</h1>
            <div class = "input-box">
                <input type = "text" placeholder="Username" required/>
                <i class='bx bxs-user'></i>
            </div>
            <div class="input-box">
            <input type="email" placeholder="Email" required/>
            <i class='bx bxs-envelope'></i>
            </div>
            <div class="input-box">
                <input type = "password" placeholder="Password" required/>
                <i class='bx bxs-lock-alt' ></i>
            </div>
            <div class="input-box">
            <input type="password" placeholder="Confirm Password" required/>
            <i class='bx bxs-lock-alt'></i>
            </div>
            <div class="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" class="btn">Login</button>

            <div class = "register-link">
                <p>Don't have an account? <a href="#"> Register </a></p>
            </div>
        </form>
    </div>
      </div>
    <CarouselContainer/>
    </div>
  )
}

export default Signin
