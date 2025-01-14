import React from 'react'

function Seats() {
  return (
    <div>
         <section class="section__container booking__container">
      <div class="booking__nav">
        <span>Economy Class</span>
        <span>Business Class</span>
        <span>First Class</span>
      </div>
      <form>
        <div class="form__group">
          <span><i class="ri-map-pin-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Location</label>
            </div>
            <p>Where are you goung?</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-user-3-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="number" />
              <label>Travellers</label>
            </div>
            <p>Add guests</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Departure</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <div class="form__group">
          <span><i class="ri-calendar-line"></i></span>
          <div class="input__content">
            <div class="input__group">
              <input type="text" />
              <label>Return</label>
            </div>
            <p>Add date</p>
          </div>
        </div>
        <button class="btn"><i class="ri-search-line"></i></button>
      </form>
    </section>

      
    </div>
  )
}

export default Seats
