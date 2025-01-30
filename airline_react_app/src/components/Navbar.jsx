import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
    <div class="nav__header">
      <div class="nav__logo">
        <Link to="/" class="logo">Skywings</Link>
      </div>
      <div class="nav__menu__btn" id="menu-btn">
        <i class="ri-menu-line"></i>
      </div>
    </div>
    <ul class="nav__links" id="nav-links">
      <li><Link to="/" >HOME</Link></li>
      <li><a href="#about">ABOUT</a></li>
    
      {/* <li><a href="#package">DESTINATIONS</a></li> */}
      <li><Link  to="/flight">FLIGHTS</Link></li>
      <li><Link to="/booking" >SEATS</Link></li>
      <li><a href="#contact">CONTACT</a></li>
      <li><a href="#">BOOK TRIP</a></li>
    </ul>
    <div class="nav__btns">
      {/* <button class="btn" to="/register">BOOK TRIP</button> */}
      <Link to="/register" className="btn">BOOK TRIP</Link>
    </div>
  </nav>
  )
}

export default Navbar