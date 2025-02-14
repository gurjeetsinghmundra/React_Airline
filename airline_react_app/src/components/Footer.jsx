import React from 'react'

function Footer() {
  return (
    <div> <footer id="contact">
      <div class="section__container footer__container">
        <div class="footer__col">
          <div class="footer__logo">
            <a href="#" class="logo">Skywings</a>
          </div>
          <p>
            Where Excellence Takes Flight. With a strong commitment to customer satisfaction and a passion for air travel, Skywings Airlines offers exceptional service and seamless journeys.
          </p>
          <ul class="footer__socials">
            <li>
              <a href="#"><i class="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-instagram-line"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-youtube-line"></i></a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Quick Links</h4>
          <ul class="footer__links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Flights</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Seats</a></li>
         


          </ul>
        </div>
        <div class="footer__col">
          <h4>Contact Us</h4>
          <ul class="footer__links">
            <li>
              <a href="#">
                <span><i class="ri-phone-fill"></i></span> +91 9324362662
              </a>
            </li>
            <li>
              <a href="#">
                <span><i class="ri-record-mail-line"></i></span> info@skywings
              </a>
            </li>
            <li>
              <a href="#">
                <span><i class="ri-map-pin-2-fill"></i></span> Mumbai, India
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__col">
          <h4>Subscribe</h4>
          <form action="/">
            <input type="text" placeholder="Enter your email" />
            <button class="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div class="footer__bar">
        Copyright © 2025 It Vedant. All rights reserved.
      </div>
    </footer>


    </div>
  )
}

export default Footer