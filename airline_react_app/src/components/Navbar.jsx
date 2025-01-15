import React from 'react'

function Navbar() {
  return (
    <nav>
    <div class="nav__header">
      <div class="nav__logo">
        <a href="#" class="logo">Skywings</a>
      </div>
      <div class="nav__menu__btn" id="menu-btn">
        <i class="ri-menu-line"></i>
      </div>
    </div>
    <ul class="nav__links" id="nav-links">
      <li><a href="#home">HOME</a></li>
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#tour">TOUR</a></li>
      <li><a href="#package">PACKAGE</a></li>
      <li><a href="#contact">CONTACT</a></li>
      <li><a href="#">BOOK TRIP</a></li>
    </ul>
    <div class="nav__btns">
      <button class="btn">BOOK TRIP</button>
    </div>
  </nav>
  )
}

export default Navbar