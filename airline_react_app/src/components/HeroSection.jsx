import React from 'react'
import styles from './HeroSection.module.css';
import logo from '../assests/header.png'
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
   
    <header id="home">
      <div class="header__container">
        <div class="header__content">
          <p>ELEVATE YOUR TRAVEL JOURNEY</p>
          <h1>Experience The Magic Of Flight!</h1>
          <div class="header__btns">
          <button class="btn" >Book A Trip Now</button>

            
            
            <Link to="/flight">
              <span><i class="ri-play-circle-fill"></i></span>
              </Link>
          </div>
        </div>
        <div class="header__image">
          <img src={logo} alt="header" />
        </div>
      </div>
    </header>
  )
}

export default HeroSection
