import React from 'react'
import d1 from '../assests/destination-1.jpg'
import d2 from '../assests/destination-2.jpg'
import d3 from '../assests/destination-3.jpg'



function Destinations() {
  return (
    <div><section class="section__container destination__container " id="destinations" >
    <h2 class="section__header">Popular Destination</h2>
    <p class="section__description">
      Discover the Most Loved Destinations Around the Globe
    </p>
    <div class="destination__grid">
      <div class="destination__card">
        <img src={d1} alt="destination" />
        <div class="destination__card__details">
          <div>
            <h4>Tradition and Futurism</h4>
            <p>New York City, USA</p>
          </div>
          <div class="destination__rating">
            <span><i class="ri-star-fill"></i></span>
            4.7
          </div>
        </div>
      </div>
      <div class="destination__card">
        <img src={d2} alt="destination" />
        <div class="destination__card__details">
          <div>
            <h4>The City of Lights</h4>
            <p>Paris, France</p>
          </div>
          <div class="destination__rating">
            <span><i class="ri-star-fill"></i></span>
            4.5
          </div>
        </div>
      </div>
      <div class="destination__card">
        <img src={d3} alt="destination" />
        <div class="destination__card__details">
          <div>
            <h4>Island of the Gods</h4>
            <p>Bali, Indonesia</p>
          </div>
          <div class="destination__rating">
            <span><i class="ri-star-fill"></i></span>
            4.8
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}

export default Destinations