import React from 'react'
import pic1 from '../assests/plan-1.jpg'
import pic2 from '../assests/plan-2.jpg'
import pic3 from '../assests/plan-3.jpg'

function About() {
  return (
    <div>
            <section class="section__container plan__container" id="about">
      <p class="subheader">TRAVEL SUPPORT</p>
      <h2 class="section__header">Plan your travel with confidence</h2>
      <p class="description">
        Find help with your bookings and travel plans, and seee what to expect
        along your journey.
      </p>
      <div class="plan__grid">
        <div class="plan__content">
          <span class="number">01</span>
          <h4>Travel Requirements for Dubai</h4>
          <p>
            Stay informed and prepared for your trip to Dubai with essential
            travel requirements, ensuring a smooth and hassle-free experience in
            this vibrant and captivating city.
          </p>
          <span class="number">02</span>
          <h4>Multi-risk travel insurance</h4>
          <p>
            Comprehensive protection for your peace of mind, covering a range of
            potential travel risks and unexpected situations.
          </p>
          <span class="number">03</span>
          <h4>Travel Requirements by destinations</h4>
          <p>
            Stay informed and plan your trip with ease, as we provide up-to-date
            information on travel requirements specific to your desired
            destinations.
          </p>
        </div>
        <div class="plan__image">
          <img src={pic1} alt="plan" />
          <img src={pic2} alt="plan" />
          <img src={pic3} alt="plan" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default About